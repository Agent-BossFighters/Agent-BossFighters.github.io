import Cookies from "js-cookie";
import { BASE_URL, kyInstance } from "@api/ky-config";
import { cleanUserData } from "@utils/api/auth.utils";
import { toast } from "react-hot-toast";

export async function authSignInUp(object, data) {
  try {
    let response = await kyInstance.post(BASE_URL + object, {
      json: data,
    });
    const userData = await response.json();
    if (userData.token) {
      toast.success(userData.message);
      return { user: cleanUserData(userData.user), token: userData.token };
    }
  } catch (error) {
    let errorData = await error.responseData;
    toast.error(errorData.error);
    throw new Error(JSON.stringify(errorData));
  }
}

export async function authSignOut() {
  try {
    const accessToken = Cookies.get("agent-auth");
    if (!accessToken) {
      throw new Error("Aucun token d'authentification trouvé.");
    }
    let response = await kyInstance.post(`${BASE_URL}signout`, {});
    Cookies.remove("agent-auth");
    return response;
  } catch (error) {
    const errorData = await error.responseData.errors;
    throw new Error(errorData);
  }
}
