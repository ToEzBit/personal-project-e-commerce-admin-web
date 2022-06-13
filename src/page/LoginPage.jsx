import React from "react";
import LoginForm from "../auth/LoginForm";

function LoginPage() {
  return (
    <div className="bg-white mt-4">
      <p className="text-5xl font-bold inline-block mb-4">Admin Login</p>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
