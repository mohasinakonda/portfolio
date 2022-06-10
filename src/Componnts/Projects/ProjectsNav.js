import React from "react";
import { Link } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <div>
      <h2 className="text-4xl text-center py-10">My Recent work</h2>

      <div class="navbar-center  lg:flex justify-center">
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
    </div>
  );
};

export default ProjectsNav;
