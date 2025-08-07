import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="login flex items-center justify-center h-dvh">
        <div className="bg-black/40 text-white/70 shadow-lg border border-black/5  py-8 px-12 flex flex-col gap-4 rounded-lg">
          <h1 className="font-semibold text-3xl mb-4 flex flex-col">LOGIN</h1>
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="outline-none border w-full p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="passowrd">Password:</label>
              <input
                type="passowrd"
                placeholder="Enter Your Password"
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
          </form>
          <span className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="hover:text-[#ac2323]">
              Signup
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
