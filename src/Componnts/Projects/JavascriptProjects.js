import React from "react";
import bankTransaction1 from "../../assests/bank_transection-1.png";
import bankTransaction2 from "../../assests/bank_transection-2.png";
import bankistWebsite1 from "../../assests/bankisht-website-1.png";
import bankistWebsite2 from "../../assests/bankist-website-2.png";

const JavascriptProjects = () => {
  return (
    <div className="lg:px-24 px-5">
      <h2 className="text-3xl text-cyan-400 py-5"> JAVASCRIPT PROJECTS</h2>

      <div className="grid lg:grid-cols-2  justify-center gap-5 ">
        <div class=" bg-base-100 shadow-xl hover:bg-cyan-100  transition duration-300 p-5">
          <h1 class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold">
            BANK TRANSACTION APP{" "}
            <a
              className="text-lg text-cyan-400"
              rel="noreferrer"
              target="_blank"
              href="https://mohasinakonda.github.io/bank-transection-app/"
            >
              {" "}
              [live preview]
            </a>
          </h1>
          <div className="grid xl:grid-cols-2 grid-cols-1 py-5">
            <div className="grid gap-3 justify-center">
              <img
                src={bankTransaction1}
                alt="electric gear"
                class="  lg:w-[300px] w[100%]  rounded-lg shadow-2xl"
              />
              <img
                src={bankTransaction2}
                alt="electric gear"
                class="  lg:w-[300px]  rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="text-3xl py-3">key features</h3>
              <ul>
                <li className="list-disc">User can withdraw money</li>
                <li className="list-disc">User can deposit money </li>
                <li className="list-disc">Login and resister</li>
                <li className="list-disc">user Authentication</li>
              </ul>
              <p>
                <span className="font-bold"> Summery of bank transaction:</span>{" "}
                Here you feel like deposit money on online bank and update real
                time,we provide fake username and password for login without
                matching username and password you can't login and can't
                transaction each other
              </p>
              <p className="font-bold">
                Code :
                <a
                  className="text-cyan-400"
                  href="https://github.com/mohasinakonda/bank-transection-app"
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
            BANKIST WEBSITE
            <a
              className="text-lg text-cyan-400"
              rel="noreferrer"
              target="_blank"
              href="https://mohasinakonda.github.io/bankist-website/"
            >
              {" "}
              [live preview]
            </a>
          </h1>
          <div class="grid xl:grid-cols-2 justify-center grid-cols-1 py-5">
            <div className="grid justify-center">
              <img
                src={bankistWebsite1}
                alt="electric gear"
                class="  lg:w-[300px] my-3 rounded-lg shadow-2xl"
              />
              <img
                src={bankistWebsite2}
                alt="electric gear"
                class="  lg:w-[300px] rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="text-3xl py-3">Technology uses:</h3>
              <ul>
                <li className="list-disc">
                  Client : Vanilla javascript, Vanilla css ,DOM , HTML
                </li>
                <li className="list-disc">server : NOT AVAILABLE</li>
                <li className="list-disc">Authentication: NOT AVAILABLE</li>
              </ul>
              <p className="text-lg">
                <span className="font-bold"> Summery of BANKIST WEBSITE:</span>{" "}
                I create BANKIST WEBSITE act as landing page. implement lazy
                image loading for poor network
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

export default JavascriptProjects;
