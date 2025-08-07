import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div>
          <label htmlFor="passowrd">Password:</label>
          <input type="passowrd" placeholder="Enter Your Password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <span>
        Don't have an account? <Link to="/signup">Signup</Link>
      </span>
    </>
  );
};

export default Login;
