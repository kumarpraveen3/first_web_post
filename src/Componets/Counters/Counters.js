import { useState } from "react";
import './Counters.css'
 const Counters=() =>{

     const[count,setCount] =useState(0);

     const handleClick = () =>{
         setCount(count+1)
     }
     return(
         <div className="counters-contener">
             <div> Count Number: {count}</div>
             <button onClick={handleClick}> IncreMent</button>
         </div>
     );
 };

 export default Counters;
