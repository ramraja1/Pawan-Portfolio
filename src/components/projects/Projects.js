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
            link="https://codenest-arww.onrender.com/"
          />
          <ProjectsCard
            title="BookNest"
            category="MERN Website"
            image={workImgOne}
             link="https://codenest-arww.onrender.com/"
          />
        
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
