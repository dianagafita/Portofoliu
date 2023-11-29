import "./Project.css";
import party from "./party.png";
import foodStore from "./food.png";
import eshop from "./e-shop.png";
import { motion } from "framer-motion";
const projectsText = `Here are some projects that I worked one.`;

const projectsList = [
  {
    name: "Party Events",
    image: party,
    imgName: "PartyEvents",
    link: "https://github.com/dianagafita/PartyEvents-nextJs",
  },
  {
    name: "Food Store",
    image: foodStore,
    imgName: "b",
    link: "https://github.com/dianagafita/food-ordering-site",
  },
  {
    name: "E-Shop",
    image: eshop,
    imgName: "c",
    link: "https://github.com/dianagafita/online-store",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projectTitle">Projects</h2>
      <span className="projectsText">{projectsText}</span>
      <div className="projectImgs">
        {projectsList.map((project) => (
          <a href={project.link}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              key={project.name}
              src={project.image}
              alt={project.imgName}
              className="projImg"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
