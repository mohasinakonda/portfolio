import React from "react";
import hero from "../../assests/mohasin.jpg";

const Hero = () => {
  return (
    <div class="hero min-h-screen bg-cyan-300 ">
      <div class="hero-content justify-center flex-col lg:flex-row-reverse  rounded shadow-2xl">
        <img
          src={hero}
          class=" rounded-lg shadow-2xl"
          alt="Hazrat ali akonda"
        />
        <div>
          <h1 class="text-5xl font-bold">Hazrat ali akonda</h1>
          <h3 className="text-xl">Frotend web app developer</h3>
          <p class="py-6">
            A passionate front End Developer experience working with React ,
            JavaScript. Discover new technology is my passion, Adept at
            contributing to a highly collaborative work environment, finding
            error and solutions, and determining customer
          </p>
          <a
            rel="noreferrer"
            href="https://drive.google.com/file/d/11cKJIkTB_0-2vqrJzoJKMJ11nHgpQcLA/view?usp=sharing"
            target="_blank"
            class="btn"
          >
            Get resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
