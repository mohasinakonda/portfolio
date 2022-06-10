import React from "react";
import hotelBooking from "../../assests/hotelBooking.png";
import hotelBooking2 from "../../assests/hotelbokking2.png";

const ReactProjects = () => {
  return (
    <div className="px-24">
      <h2 className="text-3xl text-cyan-400"> React Projects</h2>

      <div className="grid lg:grid-cols-2 gap-15 justify-center  ">
        <div class=" bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 p-5">
          <div class="hero-content flex-col lg:flex-row-reverse ">
            <div className="grid gap-3">
              <img
                src={hotelBooking}
                alt="electric gear"
                class="max-w-sm  rounded-lg shadow-2xl"
              />
              <img
                src={hotelBooking2}
                alt="electric gear"
                class="max-w-sm  rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h1 class="text-4xl font-bold">
                Hotel booking{" "}
                <a
                  className="text-lg text-cyan-400"
                  rel="noreferrer"
                  target="_blank"
                  href="https://hotelroombooking.netlify.app/"
                >
                  {" "}
                  [live preview]
                </a>
              </h1>
              <h3 className="text-3xl py-3">key features</h3>
              <ul>
                <li className="list-disc">Room details</li>
                <li className="list-disc">Checkout </li>
                <li className="list-disc">Login and resister</li>
                <li className="list-disc">user Authentication</li>
              </ul>
              <p>
                <span className="font-bold"> Summery of Hotel booking:</span>{" "}
                Hotel booking is one kind of room service type web app.Here you
                select room and confirm room booking. You don't show room
                details without login
              </p>
              <p className="font-bold">
                Code :
                <a
                  className="text-cyan-400"
                  href="https://github.com/mohasinakonda/hotel-boking"
                >
                  {" "}
                  Client side
                </a>{" "}
                |
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div class=" bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 p-5">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img
              src={hotelBooking}
              alt="electric gear"
              class="max-w-sm  rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-4xl font-bold">
                Phone mart{" "}
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
              <h3 className="text-3xl py-3">Technology uses:</h3>
              <ul>
                <li className="list-disc">Client : React ,Tailwind ,DaisyUI</li>
                <li className="list-disc">
                  server : Node ,Mongodb ,Express , Heroku
                </li>
                <li className="list-disc">
                  Authentication: Firebase, React-firebse-hooks ,JWT
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
                  href="https://github.com/mohasinakonda/phone-mart"
                >
                  {" "}
                  Client side
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactProjects;
