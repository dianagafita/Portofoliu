import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.css";
import image from "./image.png";
import LinkList from "./LinkList";
const introText = `As a recent Computer Science graduate, 
I am passionately driven to explore diverse work 
opportunities that allow me to improve my programming skills 
for a rewarding career in the tech industry.`;

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100, 200, 300], [1, 0.5, 0.5, 0]);
  const y = useTransform(scrollY, [0, 200], [0, 80]);

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };
  return (
    <section id="home">
      <div className="homeContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="homeName">Diana</span> <br />
          Frontend Developer
        </span>
        <p className="homeParagraph"> {introText}</p>
        <LinkList />
      </div>

      <motion.img
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: opacity, y: y }}
        src={image}
        alt="homeImg"
        className="homeImage"
      />
    </section>
  );
}
