import React from "react";
import Javascript from "../../SkillsIcons/Javascript";
import react from "../../assests/logo512.png";
import express from "../../assests/express.png";
import node from "../../assests/node.png";
import mern from "../../assests/mern-remove.png";

const Skills = () => {
  return (
    <section id="skills" className="lg:px-24">
      <h3 className=" text-2xl text-center text-cyan-300 pt-5">
        what I know of developing world
      </h3>
      <h2 className="text-4xl  text-center py-5"> My skills</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 ">
        <div class="card  bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 ">
          <figure class="px-10 pt-10">
            <Javascript></Javascript>
          </figure>
          <div class="card-body items-center ">
            <div className="card-title text-3xl">Javascript</div>
            <ul className="text-lg">
              <li className="list-disc">Functional Javascript</li>
              <li className="list-disc">DOM manipulation</li>
              <li className="list-disc">Asynchronous Javascript</li>
              <li className="list-disc">Callback and queue</li>
              <li className="list-disc">Debugging</li>
            </ul>
          </div>
        </div>

        <div class="card  bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 ">
          <figure class="px-10 pt-10">
            <img src={react} alt="" />
          </figure>
          <div class="card-body items-center ">
            <div className="card-title text-3xl">React</div>

            <ul className="text-lg">
              <li className="list-disc">React-functional Components</li>
              <li className="list-disc">React-router</li>
              <li className="list-disc">React-firebase-hooks</li>
              <li className="list-disc">React-toastify</li>
              <li className="list-disc">React-</li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div class="card  bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 ">
          <figure class=" px-10 pt-10">
            <img className="mt-12 py-12" src={node} alt="" />
          </figure>
          <div class="card-body items-center ">
            <div className="card-title text-3xl">Node</div>

            <ul className="text-lg">
              <li className="list-disc">React-functional Components</li>
              <li className="list-disc">React-router</li>
              <li className="list-disc">React-firebase-hooks</li>
              <li className="list-disc">React-toastify</li>
              <li className="list-disc">React-</li>
            </ul>
          </div>
        </div>
        {/* two */}
        <div class="  bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 ">
          <figure class="px-10 pt-10 w-5/4">
            <img className="mt-12 py-12" src={mern} alt="" />
          </figure>
          <div class="card-body items-center ">
            <div className="card-title text-3xl">MERN Stack</div>

            <ul className="text-lg">
              <li className="list-disc">React-functional Components</li>
              <li className="list-disc">React-router</li>
              <li className="list-disc">React-firebase-hooks</li>
              <li className="list-disc">React-toastify</li>
              <li className="list-disc">React-</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
