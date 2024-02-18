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
  const [currOpen, setcurrOpen] = useState(null);

  return (
    <div className="accordian">
      {data.map((el, i) => (
        <Accordionitem
          currOpen={currOpen}
          onOpen={setcurrOpen}
          title={el.title}
          num={i}
          key={el.title}
        >{el.text}</Accordionitem>
      ))}
        <Accordionitem
          currOpen={currOpen}
          onOpen={setcurrOpen}
          title='Text 1'
          num={22}
          key='Test 1'
        ><p>Adding children props</p>
        </Accordionitem>
    </div>
  );
}

function Accordionitem({ num, title,currOpen,onOpen,children }) {
  const isOpen =num === currOpen;

  function handletoggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={isOpen ? "item open" : "item"} onClick={handletoggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
