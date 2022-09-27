import { useState,useEffect } from "react";


const WindowSizer = () =>{
const [WindowWidth, setWindowWidthi]= useState(window.innerWidth);

const windowResizeEventHandler = ()=>{
    setWindowWidthi(window.innerWidth);
}
 useEffect(() =>{
     window.addEventListener('resze',windowResizeEventHandler)
     console.log('Event Listener Added')
    return() =>{
        window.removeEventListener('resize',windowResizeEventHandler);
        console.log("Event Listener Removed")
    }
    })


return(
    <div>
        <h2> Window Current Width</h2>
        <h2>{WindowWidth}</h2>
    </div>
);
};


export default WindowSizer;