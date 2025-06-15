import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center " >
          <img className="md:h-96 mr-16" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Education
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I'm currently pursuing my B.Tech in Information Technology at
                  J.C. Bose University of Science and Technology, Faridabad,
                  with a current CGPA of 8.28 (Expected graduation: August
                  2025).
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Skills
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  <ul>
                    <li>
                      <b>Languages</b>: C++, Python, JavaScript
                    </li>
                    <li>
                      <b>Web Development</b>: ReactJS, Node.js, Express.js,
                      HTML5, CSS3, MongoDB
                    </li>
                    <li>
                      <b>Version Control</b>: Git, GitHub
                    </li>
                    <li>
                      <b>Tools & Platforms</b>: VS Code, Google Colab, Expo
                    </li>
                    <li>
                      <b>Core CS Concepts</b>: Data Structures & Algorithms,
                      OOP, Operating Systems, DBMS, Computer Networks
                    </li>
                    <li>
                      <b>Extras</b>: RESTful APIs, Authentication/Authorization,
                      Machine Learning with Scikit-Learn & SVM
                    </li>
                  </ul>
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Area of Interest: Software Development
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I’m passionate about software development, especially building
                  scalable full-stack web applications that solve real-world
                  problems. I enjoy working on both frontend and backend, and
                  I'm actively exploring cloud infrastructure, DevOps, and site
                  reliability engineering (SRE) to deepen my expertise.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
