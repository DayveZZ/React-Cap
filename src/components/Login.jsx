import { Link } from "react-router";
// import "../styles.css";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useContext } from "react";

import { useNavigate } from "react-router";
// import Header from "./Header";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.login(formData.email, formData.password);
      if (result.success) {
        toast.success("Sign in Successful");
        navigate("/");
      } else {
        toast.error(result.error);
        navigate("/login");
      }
    } catch (error) {
      toast.error(auth.error);
      console.log(error);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="login flex items-center justify-center h-dvh">
        <div className="page-section active bg-white text-black/70 shadow-lg border border-black/5  py-8 px-12 flex flex-col gap-4 rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="auth-form flex flex-col gap-4"
          >
            <h2 className="font-semibold text-3xl mb-4 flex flex-col">Login</h2>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                id="email"
                name="email"
                required
                className="outline-none border w-full p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                id="password"
                name="password"
                required
                className="outline-none border w-full p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-black/40 hover:text-white/90 shadow w-fit py-2 px-4 rounded-lg m-auto cursor-pointer"
            >
              Login
            </button>
            <span className="text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="hover:text-[#ac2323] text-black">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
