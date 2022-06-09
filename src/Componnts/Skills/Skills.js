import React from "react";
import Javascript from "../../SkillsIcons/Javascript";
import react from "../../assests/logo512.png";

const Skills = () => {
  return (
    <div className="lg:px-24">
      <h3 className=" text-2xl text-center text-cyan-300 pt-5">
        what I know of developing world
      </h3>
      <h2 className="text-4xl  text-center py-5"> My skills</h2>

      <div className="grid lg:grid-cols-4 gap-5">
        <div class="card  bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <Javascript></Javascript>
          </figure>
          <div class="card-body items-center ">
            <p className="text-lg">
              {" "}
              Javascript is my first prefer programming language also first
              language,I do functional Javascript, OOP in Javascript,DOM, some
              data structure like call stack and queue, arrays are more
              comfortable
            </p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={react} alt="" />
          </figure>
          <div class="card-body items-center ">
            <p className="text-lg">
              {" "}
              React is another comfort ui library, I know
              react-router,react-firebase-hooks , alert for
              react-toastify,react-hooks-form. I create couple of projects which
              uses react library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
