import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/mern-project">MERN</Link>
          </li>

          <li>
            <Link to="react-project">React project</Link>
          </li>
          <li>
            <Link to="javascript">Javascript project</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Projects;
