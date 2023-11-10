import "./Project.css";
import prj1 from "./prj1.jpeg";
import { motion } from "framer-motion";

const projectsText = `Here are some projects that I worked one.`;

const projectsList = [
  { name: "Pr1", image: prj1, imgName: "a" },
  { name: "Pr2", image: prj1, imgName: "b" },
  { name: "Pr3", image: prj1, imgName: "c" },
  { name: "Pr3", image: prj1, imgName: "c" },
  { name: "Pr3", image: prj1, imgName: "c" },
  { name: "Pr3", image: prj1, imgName: "c" },
  { name: "Pr3", image: prj1, imgName: "c" },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projectTitle">Projects</h2>
      <span className="projectsText">{projectsText}</span>
      <div className="projectImgs">
        {projectsList.map((project) => (
          <motion.img
            whileHover={{ scale: 1.1 }}
            key={project.name}
            src={project.image}
            alt={project.imgName}
            className="projImg"
          />
        ))}
      </div>
    </section>
  );
}
