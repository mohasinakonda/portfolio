import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ContactUs } from "../ContactForm";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Outlet></Outlet>
      </div>
      <ContactUs />
    </div>
  );
};

export default Projects;
