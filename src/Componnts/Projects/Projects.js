import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Projects;
