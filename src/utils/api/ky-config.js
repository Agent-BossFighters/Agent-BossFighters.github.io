import ky from "ky";
import Cookies from "js-cookie";

export const BASE_URL = "http://127.0.0.1:3000";

export const kyInstance = ky.create({
  prefixUrl: BASE_URL,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const token = Cookies.get("agent-auth");
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        const authToken = response.headers.get('Authorization');
        if (authToken) {
          Cookies.set('agent-auth', authToken, { 
            secure: true,
            sameSite: 'strict'
          });
        }
      }
    ],
    beforeError: [
      async (error) => {
        const { response } = error;
        if (response) {
          try {
            const errorData = await response.json();
            error.message = errorData.message || 'Une erreur est survenue';
          } catch (e) {
            error.message = 'Une erreur est survenue';
          }
        }
        return error;
      },
    ],
  },
});
