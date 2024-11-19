import React from "react";
import AuthForm from "@/components/auth/AuthForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <AuthForm />
    </div>
  );
};

export default LoginPage;
