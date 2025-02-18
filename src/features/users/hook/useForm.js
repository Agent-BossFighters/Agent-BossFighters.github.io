import { useState } from "react";
import toast from "react-hot-toast";

export default function useForm(initialValues = {}, formType = "login") {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validate = () => {
    let validationErrors = {};

    if (formType === "register") {
      if (!values.email) {
        validationErrors.email = "Email is required";
      } else if (!validateEmail(values.email)) {
        validationErrors.email = "Email format invalide";
      }

      if (!values.username) {
        validationErrors.username = "Username is required";
      }

      if (!values.password) {
        validationErrors.password = "Password is required";
      }
    } else {
      // Validation pour le login
      if (!values.email && !values.username) {
        validationErrors.email = "Email is required";
      }

      if (values.email && !validateEmail(values.email)) {
        validationErrors.email = "Email format invalide";
      }

      if (!values.password) {
        validationErrors.password = "Password is required.";
      }
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (callback) => {
    const isValid = validate();
    if (isValid) {
      setLoading(true);
      try {
        await toast.promise(callback(values), {
          loading: "loading...",
          success: (res) => res?.message,
          error: "Error while saving!",
        });
      } catch (err) {
        console.error("Error while submitting form:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  };
}
