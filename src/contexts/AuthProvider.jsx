import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
console.log(API_URL);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load stored user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password, navigate) => {
    try {
      const res = await fetch(
        `${API_URL}/user?email=${email}&password=${password}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setUser(data[0]);
        localStorage.setItem("user", JSON.stringify(data[0]));
        navigate("/"); // ✅ redirect immediately
      } else {
        console.log("Invalid credentials");
      }
    } catch (err) {
      console.log("Login failed", err);
    }
  };

  const signup = async (username, email, password, navigate) => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        // <-- plural here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!res.ok) throw new Error("Signup failed");

      const newUser = await res.json();
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      console.log("Signup successful");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    // setUser(null);
    // localStorage.removeItem("user");
    // console.log("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
