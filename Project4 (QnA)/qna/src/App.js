import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Who made you?",
    text: "Ankit Pokhrel",
  },
  {
    title: "What is the name of your country?",
    text: "Nepal",
  },
  {
    title: "What is your college name",
    text: "Pulchowk",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return <div className="accordian">
    {data.map((el,i) => <Accordionitem title={el.title} text={el.text} num={i} key={el.title}/>)}
  </div>;
}

function Accordionitem({num, title, text}) {
  const [isOpen,setIsOpen] = useState(false);

  function handletoggle(){
    setIsOpen((isOpen) => (!isOpen));
  }


  return (
    <div className={isOpen ? "item open" : "item" } onClick={handletoggle}>
      <p className="number">{num < 9 ? `0${num+1}` : num+1}</p>
      <p className="title">{title}</p>
      <p className="icon" >{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
