import {useState} from 'react'
import "./style.css";

export default function App() 
{
  return (
    <>
    <Steps/>
    </>
  )
}

function Steps()
{
  const[numcount,setcount] =useState(0);
  const[numcount1,setcount1] =useState(1);

  return (
    <>
    <div>
      <button onClick={() => setcount1(numcount1-1)} className='btn'>-</button>
      Step:{numcount1}
      <button onClick={() => setcount1(numcount1+1)} className='btn'>+</button>
    </div>
 <div>
    <button onClick={() => setcount(numcount-numcount1)} className='btn'>-</button>
      Count:{numcount}
      <button onClick={() => setcount(numcount+numcount1)} className='btn'>+</button>
 </div>
 <Info numcount={numcount}/>
    </>
 );

  
}
function Info({numcount})
{
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + numcount);
  return ( <h1>
    {
      (numcount > 0) ? `${numcount} days from today is ${newDate.toDateString()}` : (numcount < 0) ? `${-numcount} days ago was ${newDate.toDateString()}` : `Today is ${newDate.toDateString()}`
    }
   </h1>)

}