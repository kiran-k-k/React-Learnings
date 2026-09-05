import { useState } from 'react'

function App() {
  let [counterValue, setCounter] = useState(5);
  const addValue = ( ) => {
    if(counterValue < 20){ 
      counterValue += 1;
      setCounter(counterValue)
    }
  }
  const removeValue = () =>{
    if(counterValue > 0){ 
      counterValue -= 1;
      setCounter(counterValue)
    }
    
  }
  return (
     <>
        <h1>Hellow React</h1>
        <h2>Counter Value : {counterValue}</h2>

        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Decrease Value</button>
     </>
      
  )
}

export default App
