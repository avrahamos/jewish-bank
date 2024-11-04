import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export default function LoginGuard({ children }: Props) {
  const isLogin = JSON.parse(localStorage.getItem("isLogin") || "false"); 

  if (!isLogin) {
    alert(
      "The system could not verify your identity. Please login or register."
    );
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
