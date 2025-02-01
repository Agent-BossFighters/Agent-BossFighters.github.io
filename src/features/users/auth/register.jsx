import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { authSignInUp } from "@api/auth.api";
import useForm from "@features/users/hook/useForm";
import { useState } from "react"; // Ajout pour gérer les messages d'erreur

export default function Register() {
  const [apiError, setApiError] = useState(null); // Pour afficher les erreurs de l'API
  const { values, errors, loading, handleChange, handleSubmit } = useForm({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (data) => {
    setApiError(null); // Réinitialiser les erreurs précédentes

    if (data.password !== data.confirmPassword) {
      setApiError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      console.log('Tentative d\'inscription avec:', data);
      const userData = await authSignInUp("api/v1/signup", {
        user: {
          email: data.email,
          username: data.username,
          password: data.password,
          password_confirmation: data.confirmPassword // Ajout pour Devise
        }
      });
      
      console.log('Inscription réussie:', userData);
      
      // Si vous avez un système de notification
      // toast.success('Inscription réussie !');
      
      // Redirection après succès
      // navigate('/login');
      
    } catch (err) {
      console.error('Détails de l\'erreur:', {
        message: err.message,
        status: err.response?.status,
        statusText: err.response?.statusText
      });
      
      // Afficher l'erreur à l'utilisateur
      setApiError(err.message || "Une erreur est survenue lors de l'inscription");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(handleRegister);
      }}
      className="flex flex-col items-center justify-center gap-4 w-full"
    >
      {apiError && (
        <div className="w-full p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {apiError}
        </div>
      )}

      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
        onChange={handleChange}
        required
      />
      {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        required
        minLength="6"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        required
        minLength="6"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
      )}

      <Button
        type="submit"
        className="w-full text-background"
        disabled={loading}
      >
        {loading ? "Chargement..." : "Sign up"}
      </Button>
    </form>
  );
}