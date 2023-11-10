import "./About.css";
import jsImg from "./Images/js.png";
import cssImg from "./Images/css.png";
import htmlImg from "./Images/html.png";
import reactImg from "./Images/react.png";

const aboutText = ` My journey into the
   field of frontend development began several years ago, but only 
   in my final year of college I rediscovered my passion for crafting 
   exceptional user experiences. Since then, I have been dedicated to 
   enhancing my programming skills through a combination of rigorous 
   courses and hands-on project creation.`;

const skillList = [
  {
    name: "JavaScript",
    detailsText: `JavaScript - The Complete Guide 2023 (Beginner + Advanced) by Maximilian Schwarzmüller on Udemy.`,
    image: jsImg,
    imgName: "jsImage",
  },
  {
    name: "React",
    detailsText: `React - The Complete Guide 2023 (incl. React Router and Redux) by Maximilian Schwarzmüller on Udemy.`,
    image: reactImg,
    imgName: "reactImg",
  },
  {
    name: "Css",
    detailsText: ``,
    image: cssImg,
    imgName: "cssImg",
  },
  {
    name: "Html",
    detailsText: ``,
    image: htmlImg,
    imgName: "htmlImg",
  },
];

export default function About() {
  return (
    <section id="about">
      <span className="aboutTitle">About</span>
      <span className="aboutText">{aboutText}</span>
      <div className="skillBars">
        {skillList.map((skill) => (
          <div key={skill.name} className="skillBar">
            <img
              src={skill.image}
              alt={skill.imgName}
              className="skillBarImg"
            />
            <div className="skillText">
              <h2>{skill.name}</h2>
              <p>{skill.detailsText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
