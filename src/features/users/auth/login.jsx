import Button from "@ui/buttons/button";
import Input from "@ui/input/input";
import { authSignInUp } from "@api/auth.api";
import useForm from "@features/users/hook/useForm";

export default function Login() {
  const { values, errors, loading, handleChange, handleSubmit } = useForm({
    username: "",
    password: "",
  });

  const handleLogin = async (data) => {
    try {
      console.log('Tentative de connexion avec:', data);
      const userData = await authSignInUp("/api/v1/login", data);
      console.log('Réponse du serveur:', userData);
      
      // Si la connexion réussit
      if (userData.token) {
        console.log('Connexion réussie!');
        // Rediriger vers le dashboard ou la page souhaitée
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(handleLogin);
      }}
      className="flex flex-col items-center justify-center gap-4 w-full"
    >
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
        onChange={handleChange}
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}

      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
}
