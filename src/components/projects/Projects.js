import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Codenest Platform"
            category="MERN Website"
            image={workImgThree} // Replace with actual image later
          />
          <ProjectsCard
            title="Portfolio Website"
            category="Personal Branding"
            image={workImgOne}
          />
          <ProjectsCard
            title="Automated Attendance System"
            category="Machine Learning"
            image={workImgTwo}
          />
          <ProjectsCard
            title="E-Learning App"
            category="Mobile Application"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="E-commerce Platform"
            category="Web Development"
            image={workImgFour}
          />
          <ProjectsCard
            title="Custom Admin Dashboard"
            category="Full Stack"
            image={workImgSix}
          />
          <ProjectsCard
            title="AI Chatbot"
            category="Artificial Intelligence"
            image={workImgEight}
          />
          <ProjectsCard
            title="Brand Logo Design"
            category="Graphic Design"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
