import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  return (
    <section id="projects">
      <h2 className="text-4xl text-center py-10">My Recent work</h2>

      <div class="navbar-center  lg:flex justify-center">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? { borderBottom: "2px solid cyan" }
                  : { border: "none" }
              }
              to="/projects"
            >
              MERN
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects/react-project">React project</NavLink>
          </li>
          <li>
            <NavLink to="/projects/javascript-project">
              Javascript project
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsNav;
