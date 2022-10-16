import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <nav className="navbar bg-warning">
        <div className="m-2 float-center">
          <h3 className="logo text-dark px-5 m-8 text-center "> Reactjs Midterm Project</h3>
        </div>
        
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
