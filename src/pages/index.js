import React, { useState } from "react";
import './../components/index.css'

export default function Home() {


    const [counter, setCounter] = useState(0);

    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }

    const decrement = () => {
      setCounter(prevCounter => prevCounter - 1)
    }

  return (
    <div>
      <div className='container'>
        <button className='subtractButton' onClick={decrement}>-</button>
        <div className='counter'>{counter}</div>
        <button className='addButton' onClick={increment}>+</button>
      </div>
    </div>
  )
}
