import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center items-center">
        <ProjectCard
          title="newsMonkey"
          main="This is a news website created in vanila.js and provides realtime news according to location and genre."
          link="https://github.com/Techn0buddy/NewsMonkey.github.io"
        />
        <ProjectCard
          title="helloApp"
          main="This is a chat application created in react native and provides the functionality of one-to-one chatting with friends."
          link="https://github.com/Techn0buddy/helloApp"
        />
        <ProjectCard
          title="iNotebook"
          main="This is a note making website created in vanila js and provides the functionality of note management using CRUD."
          link="https://github.com/Techn0buddy/iNoteBook-APP"
        />
      </div>
    </div>
  );
};

export default Projects;
