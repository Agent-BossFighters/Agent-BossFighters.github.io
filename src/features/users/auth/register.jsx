import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { authSignInUp } from "@api/auth.api";
import useForm from "@features/users/hook/useForm";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const { values, errors, loading, handleChange, handleSubmit } = useForm(
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    "register",
  );

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach((error) => toast.error(error));
    }
  }, [errors]);

  const handleRegister = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Password and confirm password do not match");
      return;
    }

    const payload = {
      user: {
        email: data.email,
        username: data.username,
        password: data.password,
      },
    };

    try {
      await authSignInUp("/v1/signup", payload);
      navigate("/users/login");
      toast.success("User registered successfully!");
    } catch (err) {
      toast.error("Error while registering user", err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(handleRegister);
      }}
      className="flex flex-col items-center justify-center gap-6 w-full"
    >
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
        onChange={handleChange}
      />

      <Input
        type="email"
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

      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
      />

      <Button
        type="submit"
        className="w-full h-12 text-background"
        disabled={loading}
      >
        {loading ? "Loading..." : "Register"}
      </Button>
    </form>
  );
}
