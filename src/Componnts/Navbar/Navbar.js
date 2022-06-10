import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link smooth={true} spy={true} to="projects">
          Projects
        </Link>
      </li>

      <li>
        <Link smooth={true} spy={true} to="about-me">
          About me
        </Link>
      </li>
      <li>
        <Link smooth={true} spy={true} to="contact-me">
          contact me
        </Link>
      </li>
      <li>
        <Link smooth={true} spy={true} to="skills">
          skills
        </Link>
      </li>
    </>
  );
  return (
    <div class="navbar ">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{navItem}</ul>
      </div>
      <div class="navbar-end">
        <a
          rel="noreferrer"
          href="https://drive.google.com/file/d/11cKJIkTB_0-2vqrJzoJKMJ11nHgpQcLA/view?usp=sharing"
          target="_blank"
          class="btn"
        >
          Get resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
