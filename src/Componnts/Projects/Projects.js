import React from "react";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <section className="min-h-[60vh]">
      <div>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Projects;
