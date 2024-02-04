import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  },
  {
    skill: "Figma",
    level: "intermediate",
    color: "pink"
  }
];


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        { skills.map((totalskills) => (
        <SkillList totalskills={totalskills}/>
         ))}
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src="./photo.jpg" alt="photo" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Ankit Pokhrel</h1>
      <p className="data">
        Hey Everyone myself Ankit Pokhrel. I am from Pyuthan. I am currently
        studying Bachelor in Computer Engineering in Pulchowk Campus. I am
        interested in Web Development and currently learning react js from udemy
        course and I find it too much interesting.
      </p>
    </div>
  );
}

function SkillList({totalskills}) {
  return (
    <div className="skill-list">
      <Skill skill={totalskills.skill} level={totalskills.level} color={totalskills.color}/>
      
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      {/* <span>{props.level === "advanced" ? "😎" : props.level === "beginner" ? "🍌" : "🤝" }</span> */}
     <span>
      {props.level === "beginner" && "🍌"}
      {props.level === "intermediate" && "🤝"}
      {props.level === "advanced" && "😎"}
     </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
