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
          badge="2024 - Present"
          title="Founder & Developer"
          subTitle="Codenest"
          des="Building a coding education platform using the MERN stack, focusing on coding tests and learning for students."
        />
        <ResumeCard
          badge="2024 - Present"
          title="Open Source Contributor"
          subTitle="GitHub"
          des="Contributing to various open-source projects, enhancing my coding skills and collaborating with the community."
        />
        <ResumeCard
          badge="Ongoing"
          title="Competitive Programmer"
          subTitle="CodeChef, LeetCode"
          des="Solving data structures and algorithm problems regularly to improve problem-solving and coding efficiency."
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
          badge="2022 - 2026"
          title="B.Tech in Computer Science & Engineering"
          subTitle="Your College Name"
          des="Pursuing a degree in Computer Science with a focus on web development, DSA, and ethical hacking."
        />
        <ResumeCard
          badge="2020 - 2022"
          title="Higher Secondary Education"
          subTitle="Your School Name"
          des="Completed higher secondary education with a strong foundation in mathematics and computer science."
        />
        <ResumeCard
          badge="2018 - 2020"
          title="Secondary Education"
          subTitle="Your School Name"
          des="Built a passion for coding and problem-solving during my early academic years."
        />
      </div>
    </div>
  );
};

export default Education;
