import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white md-flex flex flex-wrap items-center justify-between  p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm my-2 md:text-2xl tracking-tight ">
          I'm Jai Singh, a soon-to-graduate B.Tech IT student with hands-on
          experience in full-stack web development and infrastructure.I
          specialize in building reliable applications and solving complex
          problems with clean, efficient code.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          <a href="#Footer">
            <div className="text-md transition-all duration-300 p-1 md:p-0">
              Contact Me
            </div>
          </a>
        </button>
      </div>
      <div>
        <img className="w-96" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
