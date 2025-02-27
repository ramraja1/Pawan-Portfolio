import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10 gap-6">
      <FunFactCard icon={<BsTrophyFill className="text-yellow-500 text-4xl" />} des="96.95% Aptitude Score" />
      <FunFactCard icon={<SiAntdesign className="text-purple-500 text-4xl" />} des="Codenest Project Founder" />
      <FunFactCard icon={<BiCodeAlt className="text-blue-500 text-4xl" />} des="100+ Days of Coding" />
      <FunFactCard icon={<FaGithub className="text-gray-800 text-4xl" />} des="Maintaining GitHub Streak" />
    </div>
  );
};

export default FunFact;
