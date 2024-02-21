import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ setOpenProject }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  px-2 border-bottom border-white border-opacity-10 position-fixed ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white logo" to="/home">
            UBTC
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars text-white fa-lg"></i>
            {/* <span className="navbar-toggler-icon bg-white rounded"></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 menu ">
              <li className="nav-item">
                <Link
                  className="nav-link pe-3 active "
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3 " to="/#aboutUs">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3  " to="/#ourprojects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3 " to="/careers">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pe-3 " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link
              className="text-white text-decoration-none btn btn-danger px-4 navbtn "
              to="/contact"
            >
              Contact US
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
