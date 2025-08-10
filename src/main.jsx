// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);
