import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList/>
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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😎" color="blue"/>
      <Skill skill="GIT" emoji="😏" color="pink" />
      <Skill skill="HTML/CSS" emoji="😎"  color="red"/>
      <Skill skill="Bootstrap" emoji="🍌"  color="grey"/>
      <Skill skill="Figma" emoji="🤝" color="magenta" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
