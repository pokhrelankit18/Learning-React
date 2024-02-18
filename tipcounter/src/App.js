import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipClaculator />
    </div>
  );
}

function TipClaculator() {
  const [bill, setBill] = useState("");
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  function reset() {
    setBill("");
    setPer1(0);
    setPer2(0);
  }


  const tip = bill * (per1+per2) / 200

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage per={per1} onSelect={setPer1}>
        How did you like the serivce?
      </SelectPercentage>
      <SelectPercentage per={per2} onSelect={setPer2}>
        How did you friend like the serivce
      </SelectPercentage>
      {tip && 
      <>
      <Output tip={tip} />
      <Reset reset={reset}/>
      </>}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectPercentage({ children, per, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={per} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ tip }) {
  return <h1>You pay {tip} for tip</h1>;
}
function Reset({reset}) {
  return <button onClick={reset}>Reset</button>;
}
