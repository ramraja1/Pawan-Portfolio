import React from "react";

const ProjectsCard = ({ image, title, category, description, link }) => {
  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/80 transition duration-300 p-3 sm:p-4">
      {/* Mobile first: column, desktop: row */}
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5">
        {/* Thumbnail */}
        <div className="w-full md:w-36 lg:w-40 aspect-[4/3] overflow-hidden rounded-lg relative group">
          <img
            className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300"
            src={image}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-green-500/5 to-green-200/10 opacity-0 group-hover:opacity-100 duration-300" />
        </div>

        {/* Text + Button */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-titleFont text-base sm:text-lg font-semibold text-[#f5f5f5]">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-green-400 mt-1">
              {category}
            </p>
            {description && (
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed break-words">
                {description}
              </p>
            )}
          </div>

          {link && (
            <div className="mt-3">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-green-500 hover:bg-green-500/10 hover:translate-y-[1px] duration-200"
              >
                <span>View Project</span>
                <span className="text-base sm:text-lg">↗</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
