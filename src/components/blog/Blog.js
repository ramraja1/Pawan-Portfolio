import React from "react";
import Title from "../home/Title";
import { image} from "../../assets";
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
          
         
        </div>
       
        
      </div>
    </div>
  );
};

export default Blog;
