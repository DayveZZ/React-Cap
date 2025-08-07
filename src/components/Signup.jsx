import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <div className="signup flex items-center justify-center h-dvh">
        <div className="bg-black/40 text-white/70 shadow-lg border border-black/5  py-8 px-12 flex flex-col gap-4 rounded-lg">
          <h1 className="font-semibold text-3xl mb-4 flex flex-col">SIGNUP</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                required
                placeholder="Enter Your Username"
                value={userInfo.username}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, username: e.target.value })
                }
                className="outline-none border w-full p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
                className="outline-none border w-full p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter Your Password"
                value={userInfo.password}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
                className="outline-none border w-full p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-black/40 hover:text-white/90 shadow w-fit py-2 px-4 rounded-lg m-auto cursor-pointer"
            >
              Signup
            </button>
          </form>
          <span className="text-center">
            Have an account?{" "}
            <Link to="/login" className="hover:text-[#ac2323]">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
