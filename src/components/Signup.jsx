import { Link } from "react-router";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const auth = useContext(AuthContext);
  // console.log(auth);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signup(formData);
      console.log(result);
      if (!result.success) {
        toast.error(result.error);
        navigate("/signup");
      } else {
        navigate("/login");
        toast.success("User Created Successfully");
      }
      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(auth.error); // for user
      console.log(error.message); // for dev
    }
  };

  return (
    <>
      <div className="signup flex items-center justify-center h-dvh">
        <div className="page-section active bg-white text-black/70 shadow-lg border border-black/5  py-8 px-12 flex flex-col gap-4 rounded-lg">
          <form
            className="auth-form active flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <h2 className="font-semibold text-3xl mb-4 flex flex-col">
              Signup
            </h2>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                type="text"
                id="username"
                name="username"
                required
                className="outline-none border w-full p-2 rounded"
              />
            </div>

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
              Signup
            </button>

            <Link className="text-center" to="/login">
              Already have an account?{" "}
              <span className="hover:text-[#ac2323]">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
