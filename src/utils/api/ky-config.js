import ky from "ky";
import Cookies from "js-cookie";

// Détermine si on est en mode test ou production
const isTestMode = import.meta.env.VITE_ENV === "test";

// Sélectionne les URLs appropriées selon le mode
export const FRONTEND_URL = isTestMode
  ? import.meta.env.VITE_FRONTEND_TEST_URL
  : import.meta.env.VITE_FRONTEND_PROD_URL;

export const BACKEND_URL = isTestMode
  ? import.meta.env.VITE_BACKEND_TEST_URL
  : import.meta.env.VITE_BACKEND_PROD_URL;

export const kyInstance = ky.create({
  prefixUrl: `${BACKEND_URL}/api/`,
  credentials: "include",
  hooks: {
    beforeRequest: [
      (request) => {
        const token = Cookies.get("agent-auth");
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
        console.log("Request URL:", request.url);
      },
    ],
    beforeError: [
      async (error) => {
        const { response } = error;
        if (response) {
          const errorData = await response.json();
          error.responseData = errorData;
        }
        return error;
      },
    ],
    afterResponse: [],
  },
});
