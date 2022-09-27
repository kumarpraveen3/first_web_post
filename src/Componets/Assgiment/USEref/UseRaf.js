
// import React, { useState } from 'react'
import React, { useRef } from 'react'
import'./Useraf.css'

// const UseRaf = (props) => {
//     const[fname,setfname]=useState('')
//     const[lname,setlname]=useState('')
//     function handlefname(e){
//         setfname(e.target.value)
//         console.log(e.target.value)
//     }
//     function handlelname(e){
//         setlname(e.target.value)
//         console.log(e.target.value)
//         // setlname("")
//     }
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log("submit")
//         const formData={
//             fname:fname,
//             lname:lname,
//         }
//      props.getData(formData)
       
//     }
//   return (
//     <div className='formcenter' >
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor='fname'></label>
//             <input type="text" id="fname" value={fname} onChange={handlefname}></input>
//         </div>
//         <div>
//             <label htmlFor='Lname'></label>
//             <input type="text" id="Lname" value={lname} onChange={handlelname}></input>
//         </div>
//         <button >submit</button>
//     </form>

// </div>
// )
// }


      //uncontrolled component

function UseRaf() {
    const fnameref = useRef()
    function handlesubmit(e) {
        e.preventDefault()
        fnameref.current.value = ""
        console.log('fname',fnameref.current.value)
    }
    function handlechange(e){
        console.log(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <lable htmlFor="">Fname</lable>
                <input type="text" ref={fnameref} onChange={handlechange}></input>
                <button>submit</button>
               
            </form>
        </div>
    )
}



   
  
       

export default UseRaf
