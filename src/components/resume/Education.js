import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />

        <ResumeCard
          badge="May 2025"
          title="Intern"
          subTitle="Leopard Innovation Technology"
          des="Worked as a web development intern—contributing to real-world client projects using MERN stack technologies."
        />

        <ResumeCard
          badge="2024 - Present"
          title="Founder & Full-Stack Developer"
          subTitle="CodeNest"
          des="Developing an AI-powered coding platform for colleges with real-time leaderboards and authentication."
        />

       

        <ResumeCard
          badge="2022 - Present"
          title="Competitive Programmer"
          subTitle="LeetCode, CodeChef"
          des="Solved 400+ DSA problems and actively participating in coding competitions & hackathons."
        />
      </div>

      {/* Separator */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />

        <ResumeCard
          badge="Aug 2022 – Present"
          title="B.Tech in Computer Engineering (CGPA: 7.3)"
          subTitle="Sagar Institute of Science Technology & Engineering (RGPV), Bhopal"
          des="Focused on full-stack development, DSA, and problem-solving. Active in hackathons and coding clubs."
        />

        <ResumeCard
          badge="April 2020 – March 2022"
          title="Senior Secondary (12th) – 70%"
          subTitle="Central Academy, Basti, U.P."
          des="Science stream with a strong foundation in mathematics and computer fundamentals."
        />

        <ResumeCard
          badge="April 2018 – March 2020"
          title="Secondary (10th) – 80%"
          subTitle="Central Academy, Basti, U.P."
          des="Discovered interest in computers and technology during early schooling."
        />
      </div>
    </div>
  );
};

export default Education;
