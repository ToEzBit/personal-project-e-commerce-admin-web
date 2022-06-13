import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get("/admins");
          setUser(resMe.data.admin);
        }
      } catch (err) {
        removeAccessToken();
        navigate("/login");
      }
    };
    fetchMe();
  }, []);

  const login = async (input) => {
    const res = await axios.post("/admins/login", input);
    setAccessToken(res.data.token);
    const resMe = await axios.get("/admins");
    setUser(resMe.data.user);
  };

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { useAuth };
