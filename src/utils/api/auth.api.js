import Cookies from "js-cookie";
import { BASE_URL, kyInstance } from "@api/ky-config";

export async function authSignInUp(endpoint, data) {
  try {
    console.log('Envoi de la requête à:', endpoint);
    console.log('Données:', data);
    
    const response = await kyInstance.post(endpoint, {
      json: data,
      throwHttpErrors: false // Pour gérer nous-mêmes les erreurs
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur d\'authentification');
    }

    const userData = await response.json();
    console.log('Réponse:', userData);
    
    return userData;
  } catch (error) {
    console.error('Erreur complète:', error);
    throw error;
  }
}

export async function authSignOut() {
  try {
    const accessToken = Cookies.get("agent-auth");
    const refreshToken = Cookies.get("agent-refresh");
    if (!accessToken || !refreshToken) {
      throw new Error("Aucun token d'authentification trouvé.");
    }
    let response = await kyInstance.post(`${BASE_URL}signout`, {});
    Cookies.remove("agent-auth");
    Cookies.remove("agent-refresh");
    return response;
  } catch (error) {
    const errorData = await error.responseData.errors;
    throw new Error(errorData);
  }
}
