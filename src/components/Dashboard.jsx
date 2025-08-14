import React from "react";
import { Link } from "react-router";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="p-4 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 bg-black/50 w-fit px-8 py-8 rounded text-white/70 h-full">
          <Link to="/" className="dashborad-items">
            Home
          </Link>
          <Link to="/notes" className="dashborad-items">
            Notes
          </Link>
          <Link to="/todo" className="dashborad-items">
            ToDo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
