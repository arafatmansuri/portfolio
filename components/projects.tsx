"use client";

import { useState } from "react";
import { FiArrowUpRight as Preview } from "react-icons/fi";

const Projects = () => {
  const projectsData = [
    {
      src: "/project/SecondBrainSS.png",
      alt: "SecondBrain",
      title: "Second Brain",
      category: "fullstack",
      link: "https://www.secondbrain.services/",
    },
    {
      src: "/project/BookmarkManagerSS.png",
      alt: "BookmarkManager",
      title: "Bookmark Manager",
      category: "fullstack",
      link: "https://bookmark-manager-bice.vercel.app/",
    },
    {
      src: "/project/DrawBoardSS.png",
      alt: "DrawBoard",
      title: "Draw Board",
      category: "fullstack",
      link: "https://github.com/arafatmansuri/DrawBoard/",
    },
    {
      src: "/project/SpaceKitSS.png",
      alt: "SpaceKit",
      title: "Space Kit",
      category: "frontend",
      link: "https://arafatmansuri.github.io/SpaceKit/",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(
    (project) => filter === "all" || project.category.toLowerCase() === filter
  );

  const categories = ["all", "fullstack", "frontend"];

  return (
    <section className="projects">
      <ul className="filter-list">
        {categories.map((category) => (
          <li key={category} className="filter-item">
            <button
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <ul className="project-list">
        {filteredProjects.map(({ src, alt, title, category, link }) => (
          <li
            className="project-item active"
            key={title}
            data-filter-item
            data-category={category.toLowerCase()}
          >
            <a href={link} target="_blank">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Preview />
                </div>
                <img src={src} alt={alt} loading="lazy" />
              </figure>
              <h3 className="project-title">{title}</h3>
              <p className="project-category">{category}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
