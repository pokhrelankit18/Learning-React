import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <>
      <Steps />
    </>
  );
}

//Typing tool

// const question =
//   "ABCDEFGHIJKLMNOPQRESTUVWXYZ";

// function Steps() {
//   const [type, settype] = useState("");
//   const [count, setcount] = useState(0);
//   function handleSubmit() {
//     for (let I = 0; I < question.length; I++) {
//       if (type[I] === question[I]) {
//         setcount((count) => count+1);
//       }
//     }
//   }
//   function handleReset() {
//     settype("");
//     setcount(0);
//   }

//   return (
//     <>
//     <p>Type A to Z and click Submit</p>
//       <input
//         type="text"
//         value={type}
//         onChange={(e) => settype(e.target.value)}
//         placeholder={question}
//       />
//       <button className="btn" onClick={handleSubmit}>
//         Submit
//       </button>
//       <button className="btn" onClick={handleReset}>
//         Reset
//       </button>
//       <h3>Your accuracy is {(count*100)/26}%.</h3>
//     </>
//   );
// }

function Steps() {
  const [numcount, setcount] = useState(0);
  const [numcount1, setcount1] = useState(1);

  function handleReset() {
    setcount(0);
    setcount1(1);
  }

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={numcount1}
          onChange={(e) => setcount1(Number(e.target.value))}
        />
        Step:{numcount1}
      </div>
      <div>
        <button onClick={() => setcount(numcount - numcount1)} className="btn">
          -
        </button>
        <input
          type="text"
          value={numcount}
          placeholder="0"
          onChange={(e) => Number(e.target.value)}
        />
        <button onClick={() => setcount(numcount + numcount1)} className="btn">
          +
        </button>
      </div>
      <Info numcount={numcount} />
      <button onClick={handleReset}>Reset</button>

    </>
  );
}
function Info({ numcount }) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + numcount);
  return (
    <h1>
      {numcount > 0
        ? `${numcount} days from today is ${newDate.toDateString()}`
        : numcount < 0
        ? `${-numcount} days ago was ${newDate.toDateString()}`
        : `Today is ${newDate.toDateString()}`}
    </h1>
  );
}
