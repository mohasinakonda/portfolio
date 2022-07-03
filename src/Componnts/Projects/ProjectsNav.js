import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsNav = () => {
  const activeClass = "border border-cyan-500";

  return (
    <section id="projects">
      <h2 className="text-4xl text-center py-10">My Recent work</h2>

      <div class="navbar-center  flex justify-center">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NavLink
              // className="btn bg-base-100 hover:text-white"
              style={({ isActive }) =>
                isActive ? { borderBottom: "2px solid cyan" } : undefined
              }
              to="/projects"
            >
              MERN
            </NavLink>
          </li>

          <li>
            <NavLink
              // className="btn bg-base-100 hover:text-white"
              className={({ isActive }) => (isActive ? activeClass : undefined)}
              to="/projects/react-project"
            >
              REACT
            </NavLink>
          </li>
          <li>
            <NavLink
              // className="btn bg-base-100 hover:text-white"

              className={({ isActive }) => (isActive ? activeClass : undefined)}
              to="/projects/javascript-project"
            >
              JAVASCRIPT
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsNav;
