import React from "react";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <ServicesCard
        icons={<FaReact className="text-blue-500 text-4xl" />}
        title="Frontend Development"
        subTitle="Creating modern, responsive, and user-friendly web interfaces using React, Tailwind CSS, and JavaScript."
      />
      <ServicesCard
        icons={<SiMongodb className="text-green-500 text-4xl" />}
        title="Backend Development"
        subTitle="Building scalable and efficient server-side applications using Node.js, Express, and MongoDB."
      />
      <ServicesCard
        icons={<AiOutlineAntDesign className="text-purple-500 text-4xl" />}
        title="UI/UX & Web Design"
        subTitle="Designing attractive, user-focused interfaces with smooth navigation and interactive components."
      />
      <ServicesCard
        icons={<BiCodeAlt className="text-orange-500 text-4xl" />}
        title="Competitive Programming"
        subTitle="Solving DSA problems and coding challenges to improve logic-building and problem-solving skills."
      />
    </div>
  );
};

export default MyServices;
