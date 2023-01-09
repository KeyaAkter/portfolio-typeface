import { useRef, useState } from "react";
import {
  useProjectTitleDownward,
  useProjectLineForward,
  useProjectTextUpward,
  useProjectNumDownfall,
} from "../hooks/gsap";

const data = [
  {
    id: 1,
    number: "01",
    title: "React Todo App",
    date: "Nov/22",
    tools: "React - Tailwind Css",
  },
  {
    id: 2,
    number: "02",
    title: "Immemorial",
    date: "Nov/22",
    tools: "React - React Router - GSAP - CSS",
  },
  {
    id: 3,
    number: "03",
    title: "Foodverse",
    date: "Dec/22",
    tools: "React - React Router - CSS",
  },
  {
    id: 4,
    number: "04",
    title: "Tech Alpha",
    date: "Jan/23",
    tools: "React - React Router - Redux - Tailwind Css",
  },
];

const colors = ["#db4c44", "#32b8cb", "#8069ed", "#00ad6f"];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const projectsRef = useRef(null);
  const title1 = useRef(null);
  const title2 = useRef(null);
  const lineRef = useRef([]); // holds individual element
  const textRef = useRef([]);
  const numRef = useRef([]);
  const dateRef = useRef([]);
  const toolsRef = useRef([]);

  const titleArr = [title1, title2];

  useProjectTitleDownward(titleArr, projectsRef);
  useProjectLineForward(lineRef.current, projectsRef);
  useProjectTextUpward(textRef.current, projectsRef);
  useProjectTextUpward(dateRef.current, projectsRef, 1);
  useProjectTextUpward(toolsRef.current, projectsRef, 1.5);
  useProjectNumDownfall(textRef.current, projectsRef);

  const projectBgColor = {
    backgroundColor: colors[currentProject],
  };

  const handleProjectColor = (index) => {
    setCurrentProject(index);
  };

  return (
    <div className="projects-section" ref={projectsRef}>
      <div className="titles">
        <span ref={title1}>Selected Works (2022 - 2023)</span>
        <span ref={title2}>Projects</span>
      </div>

      <div className="projects-list-wrapper" style={projectBgColor}>
        {data.map((project, i) => (
          <div key={project.id} className="project-wrapper">
            <div
              className="project-item"
              onMouseOver={() => handleProjectColor(i)}
            >
              <div className="project-titles">
                <span ref={(el) => (numRef.current[i] = el)}>
                  {project.number}
                </span>
                <h2
                  className="single-title"
                  ref={(el) => (textRef.current[i] = el)}
                >
                  {project.title}
                </h2>
                <h2 className="multiple-title">
                  {project.title} - {project.title} -{project.title}
                </h2>
              </div>
              <div className="project-details">
                <span ref={(el) => (dateRef.current[i] = el)}>
                  {project.date}
                </span>
                <span ref={(el) => (toolsRef.current[i] = el)}>
                  {project.tools}
                </span>
              </div>
            </div>

            <hr ref={(el) => (lineRef.current[i] = el)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
