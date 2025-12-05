import React from "react";
import {
  workImgOne,
  workImgThree,
  workImgFour, // Placeholder for CodeNest Pro image
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6 space-y-6">

          {/* New Added Project */}
          <ProjectsCard
            title="CodeNest Pro (Enterprise Version)"
            category="College & Institution Platform"
            image={workImgFour}
            link="https://www.linkedin.com/posts/pawan-tiwari-922284246_coding-edtech-assessments-activity-7371625045036752896-cFG1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzooCoBsRsQazWpJPjrXhrfkjdPV5gw-FM"
            description="A professional coding assessment and learning management system for colleges featuring Super Admin, Admin, and Student panels, AI-driven question generation, batch management, anti-cheating code editor, real-time leaderboards, and paid subscription model."
          />

          <ProjectsCard
            title="CodeNest Platform"
            category="Full-Stack MERN Application"
            image={workImgThree}
            link="https://codenest-arww.onrender.com/"
            description="AI-powered coding platform for colleges with real-time leaderboards and secure contests. Includes built-in code editor and authentication."
          />

          <ProjectsCard
            title="BookNest – Old Book Marketplace"
            category="MERN Website"
            image={workImgOne}
            link="https://book-nest-pied.vercel.app/"
            description="A marketplace for buying and selling old books with search, filtering, clean UI, and secure login built with MERN."
          />

          
        </div>
      </div>
    </div>
  );
};

export default Projects;
