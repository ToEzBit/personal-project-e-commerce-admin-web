import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await login({ username, password });
      navigate("/all-order");
      location.reload(false);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="bg-main-theme-color h-screen">
      <div className="flex justify-center  ">
        <form
          className="bg-white mt-[30vh] w-3/12 px-8 py-4  rounded-lg"
          onSubmit={handleSubmitForm}
        >
          <p className="py-4 text-xl">Login form</p>
          <div className="flex flex-col ">
            <input
              className="border border-slate-400 my-4 rounded-md"
              placeholder="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="border border-slate-400 my-4 rounded-md"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-main-theme-color text-white rounded-md"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
