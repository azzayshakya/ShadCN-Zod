import { useState } from "react";
import { authenticateUser } from "@/features/auth/authService";

export const useAuthForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      await authenticateUser(email, password);
    } catch (error) {
      setError("Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
};
