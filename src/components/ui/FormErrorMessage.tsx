import React from "react";

interface FormErrorMessageProps {
  children: React.ReactNode;
}

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ children }) => {
  return (
    <p className="text-sm text-red-600 mt-1">
      {children}
    </p>
  );
};

export default FormErrorMessage;
