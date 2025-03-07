import { Link } from "react-router-dom";
import { Button } from "@shared/ui/button";
import { useAuth } from "@context/auth.context";

export default function PremiumButton() {
  const { user } = useAuth();

  // Si l'utilisateur n'est pas connecté, on ne rend rien
  if (!user) return null;

  return (
    <Link to="/payments/pricing">
      <Button className="bg-primary text-background hover:bg-primary/90 font-medium">
        PREMIUM
      </Button>
    </Link>
  );
}
