import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleMiddle() {
      setStep((s) => s=2);
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {isOpen ? '❌' : '✔'}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button textcolor="#fff" bgcolor="#7950f2" onClick={handlePrevious}>
              {" "}
              <span>⏪</span>Previous
            </Button>
            <Button textcolor="#fff" bgcolor="#7950f2" onClick={handleMiddle}>
              {" "}
              Middle<span>🤚</span>
            </Button>
            <Button textcolor="#fff" bgcolor="#7950f2" onClick={handleNext}>
              {" "}
              Next<span>⏩</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textcolor, bgcolor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgcolor, color: textcolor }}
    >
      {children}
    </button>
  );
}
