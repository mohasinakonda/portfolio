import React from "react";
import hotelBooking from "../../assests/hotelBooking.png";
import hotelBooking2 from "../../assests/hotelbokking2.png";

const ReactProjects = () => {
  return (
    <div className="px-5 lg:px-24">
      <h2 className="text-3xl text-cyan-400 py-5"> React Projects</h2>

      <div className="grid lg:grid-cols-2 gap-5 justify-center  ">
        <div class=" bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 p-5">
          <h1 class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold">
            HOTEL BOOKING{" "}
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
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
            <div className="grid gap-3 justify-center  py-5">
              <img
                src={hotelBooking}
                alt="electric gear"
                class=" lg:w-[300px] w[100%]  rounded-lg shadow-2xl"
              />
              <img
                src={hotelBooking2}
                alt="electric gear"
                class="lg:w-[300px] w[100%]  rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:pl-8">
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
          <h1 class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold">
            PHONE MART{" "}
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
          <div className="grid xl:grid-cols-2 grid-cols-1 py-5">
            <img
              src={hotelBooking}
              alt="electric gear"
              class="lg:w-[300px] w[100%]  rounded-lg shadow-2xl"
            />
            <div className="lg:pl-8">
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
