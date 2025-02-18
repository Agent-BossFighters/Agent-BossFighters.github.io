import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { authSignInUp } from "@api/auth.api";
import useForm from "@features/users/hook/useForm";
import { useAuth } from "@context/auth.context";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { values, errors, loading, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    "login",
  );

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => toast.error(error));
    }
  }, [errors]);

  const handleLogin = async (data) => {
    try {
      const payload = {
        user: {
          email: data.email,
          password: data.password,
        },
      };
      const response = await authSignInUp("/v1/login", payload);
      if (response.token && response.user) {
        login(response.user, response.token);
        navigate("/dashboard");
        return response;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(handleLogin);
      }}
      className="flex flex-col items-center justify-center gap-6 w-full"
    >
      <Input
        type="text"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 text-background"
      >
        {loading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
}
