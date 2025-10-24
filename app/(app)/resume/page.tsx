import { FaBook as BookIcon } from "react-icons/fa";

const Resume = () => {
  const TimelineItems = [
    {
      title: "The New Middle High School",
      date: "2022 — 2023",
      description: "Completed my high school study.",
    },
    {
      title: "Gujarat University",
      date: "2023 — 2026",
      description: "Pursuing BCA from the LJ College, Gujarat University.",
    },
  ];

  const skills = [
    "TypeScript",
    "JavaScript",
    "Java",
    "React.JS",
    "Next.JS",
    "Express.JS",
    "Node.JS",
    "MongoDB",
    "Postrgres",
    "MySQL",
    "Prisma",
    "TailwindCSS",
  ];

  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title title-text">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookIcon />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {TimelineItems.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <div className="skill-card">
          {skills.map((s) => (
            <div className="content-card h5" key={s}>{s}</div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;
