import React from "react";
import electricHome from "../../assests/electric-gear-home.png";
import laptop1 from "../../assests/laptop-1.png";

import HomePage from "../../assests/homepase-2.png";

const Mern = () => {
  return (
    <div className="px-5 lg:px-24">
      <h2 className="text-3xl text-cyan-400 py-5"> MERN Projects</h2>

      <div className="grid lg:grid-cols-2 gap-5 justify-center  ">
        <div class=" bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300">
          <h1 class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold">
            ELECTRIC GEAR{" "}
            <a
              className="text-lg text-cyan-400"
              rel="noreferrer"
              target="_blank"
              href="https://electric-gear.netlify.app/"
            >
              {" "}
              [live preview]
            </a>
          </h1>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 ">
            <div className="grid gap-3 justify-center">
              <img
                src={electricHome}
                alt="electric gear"
                class=" lg:w-[300px] w[100%]  rounded-lg shadow-2xl pt-5"
              />
              <img
                src={HomePage}
                alt="electric gear"
                class=" lg:w-[300px] w[100%]  rounded-lg shadow-2xl"
              />
            </div>
            <div className="px-3">
              <h3 className="text-3xl py-3">key features</h3>
              <ul>
                <li className="list-disc">Products details</li>
                <li className="list-disc">Stripe payment method</li>
                <li className="list-disc">Dashboard</li>
                <li className="list-disc">user profile</li>
                <li className="list-disc">Admin profile</li>
              </ul>
              <p>
                <span className="font-bold"> Summery of electric-gear:</span>{" "}
                Electric gear is whole sell electric tools, here you don’t buy a
                product without login, both user and admin have dashboard. User
                manage his order, see payment history. Admin manage all products
                ,order and make admin to specific users.
              </p>
              <p className="font-bold">
                Code :
                <a
                  className="text-cyan-400"
                  href="https://github.com/mohasinakonda/electric-gear-client"
                >
                  {" "}
                  Client side
                </a>{" "}
                |
                <a
                  className="text-cyan-400"
                  href="https://github.com/mohasinakonda/electrice-gear-server"
                >
                  {" "}
                  Server side
                </a>{" "}
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div class=" bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 p-5">
          <h1 class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold">
            LAPTOP MART{" "}
            <a
              className="text-lg text-cyan-400"
              rel="noreferrer"
              target="_blank"
              href="https://laptop-mart.netlify.app/"
            >
              {" "}
              [live preview]
            </a>
          </h1>
          <div className="grid xl:grid-cols-2 grid-cols-1">
            <div className="grid gap-3 justify-center py-5">
              <img
                src={laptop1}
                alt="electric gear"
                class=" lg:w-[300px] w[100%]  rounded-lg shadow-2xl"
              />
              <img
                src={HomePage}
                alt="electric gear"
                class=" lg:w-[300px] w[100%]  rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="text-3xl py-3">Technology uses:</h3>
              <ul>
                <li className="list-disc">Client : React ,Tailwind ,DaisyUI</li>
                <li className="list-disc">
                  server : Node ,Mongodb ,Express , Heroku
                </li>
                <li className="list-disc">
                  Authentication: Firebase, React-firebase-hooks ,JWT
                </li>
              </ul>
              <p className="text-lg">
                <span className="font-bold"> Summery of Laptop mart:</span> This
                is warehouse management app .Here admin add ,delete update
                product ,if a product is delivered than product stock decrease.
              </p>
              <p className="font-bold">
                Code :
                <a
                  className="text-cyan-400"
                  href="https://github.com/mohasinakonda/wareHouseManagement-server"
                >
                  {" "}
                  Client side
                </a>{" "}
                |
                <a
                  className="text-cyan-400"
                  href="https://github.com/mohasinakonda/werehouseManagement"
                >
                  {" "}
                  Server side
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mern;
