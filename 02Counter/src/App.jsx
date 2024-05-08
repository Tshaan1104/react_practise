import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(15)  ;
  // let counter =15;
    const addvalue = () =>{
      
      console.log("Value Added",counter);
      counter =counter + 1;
      if (counter<=20){
        setcounter(counter);
      }
      else{
        alert("Counter value is greater than 20");
        counter = 20;
        setcounter(counter);
      }
      // setcounter(counter++);
    }
    const removevalue=()=>{
      console.log("Remove Values",counter);
      counter =counter-1;
      if (counter>=0){
        setcounter(counter);
      }
      else {
        alert("Counter can be less than 0");
        counter=0;
        setcounter(counter);
      }
    }
    const resetvalue=()=>{
      counter=15;
      setcounter(15);
    }
  return (
    <>
   <div>
    <h1>Tiwari Shaan </h1>
    <h3> Counter Value = {counter}</h3>
    <button onClick={addvalue}>Add Value</button>
    <br />
    <br />
    <button onClick={removevalue}>Remove Value</button>
    <br /><br />
    <button onClick={resetvalue}>Reset</button>
   </div>
    </>
  )
}

export default App
