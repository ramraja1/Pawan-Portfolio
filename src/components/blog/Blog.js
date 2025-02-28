import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree , image} from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={image}
            title="feb 28 ,2025"
            subTitle="Scope of Web Developer"
            category="Technical"
          />
          <BlogCard
            image={blogImgTwo}
            title="feb 15, 2025"
            subTitle="How to become a creative designer"
            category="Documentation"
          />
         
        </div>
        <div className="px-6">
        <BlogCard
            image={blogImgThree}
            title="Jan 01, 2025"
            subTitle="My hackathon experience in VIT"
            category="Documentation"
          />
          <BlogCard
            image={blogImgOne}
            title="Nov 13, 2024"
            subTitle="Life of tier 3 students"
            category="Documentation"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
