import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Projects;
