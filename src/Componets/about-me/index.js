// import { Component } from 'react'
import './index.css'


const AboutMe=( props)=>{
    return(
        <div className="box">
                <h1> About Me</h1>
                <h2> My Name is {props.name} </h2>
                <p> My Hobby is {props.hobby}  </p>
                 <h5>Function Component</h5>
       </div>
    );
} 

// class AboutMe extends Component{
//     return (){ <div className="box">
//                 <h1> About Me</h1>
//                 <h2> My Name is Praveen </h2>
//                 <h3> My Hobby </h3>
//                 <p>Music ,drawingh</p>
//                 <h5>Class Componet</h5>

//        </div>

//     }
// }


export default AboutMe ;