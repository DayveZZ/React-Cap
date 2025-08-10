import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <header
          id="main-header"
          className="flex items-center justify-between bg-black/80 text-white/70 py-4 px-8 shadow"
        >
          <h1 className="logo uppercase">My Project</h1>
          <button
            className="hamburger cursor-pointer hover:text-white"
            id="hamburger-btn"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            ☰
          </button>
          {show && (
            <nav
              id="desktop-nav"
              className="absolute right-2 top-16 px-4 py-8  w-50 h-70 bg-black/80 flex flex-col  justify-between rounded"
            >
              <div className="flex flex-col gap-2">
                <a href="#dashboard" id="nav-dashboard" className="nav-item">
                  Dashboard
                </a>
                <a href="#tasks" id="nav-tasks" className="nav-item">
                  Tasks
                </a>
                <a href="#notes" id="nav-notes" className="nav-item">
                  Notes
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span id="user-info" className="nav-item">
                  Dayve
                </span>
                <button id="logout-btn" className="nav-item text-start">
                  Log out
                </button>
              </div>
            </nav>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;
