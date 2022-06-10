import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/projects">MERN</Link>
          </li>

          <li>
            <Link to="/projects/react-project">React project</Link>
          </li>
          <li>
            <Link to="/projects/javascript-project">Javascript project</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Projects;
