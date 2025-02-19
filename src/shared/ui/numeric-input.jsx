import { Input } from "./input";

export const NumericInput = ({ value, onChange, placeholder, className }) => {
  const handleChange = (e) => {
    // Autorise uniquement les chiffres et un seul point décimal
    const newValue = e.target.value;

    // Vérifie si la valeur est vide ou correspond au format souhaité
    if (newValue === "" || /^\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`${className} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
    />
  );
};
