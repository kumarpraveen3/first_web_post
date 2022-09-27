import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    const[count, setCount]=useState(" ")
    
    function clickbutton(){
        setCount ("hello")
    }

  return (
    <div>
        <h1> {count} </h1>
    <button onClick={clickbutton}>onclick</button>
    </div>
  )
}

export default UseStateHook
