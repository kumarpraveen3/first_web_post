import { useState } from 'react';
// import { Component } from 'react';
import './BarSearch.css'

const BarSearch=(props)=>{
    const [wlcomeMassage ,setWelcomeMassage]= useState('Hello World');
    const [inputText, setInputText] =useState('');

    const handleClick = () => {
        setWelcomeMassage(inputText);
    }

     const handleInputChang = (e) => {
         const { value } = e.target;
         setInputText(value)
        //  setWelcomeMassage(value)
     }
    return(
        <div className='BarSearchClass'>
            {/* <div>
            <h2> Search Bar</h2>
            </div>
           
             */}
            <h2>State Example</h2>
            <div>{wlcomeMassage}</div>
            <input onChange={handleInputChang} type="text"/>
            <button onClick={handleClick}> Chang Welcome Massage</button>
        </div>
    )
}

// class BarSearch extends Component{
//     constructor(){
//         super();
//         this.state = {
//         wlcomeMassage: 'hello warld',
//         inputText: ''
//     }
// }
//     handleInputChang=(e)=>{
//         const{ value } = e.target;
//         this.setState({inputText: value, wlcomeMassage: value})

//     };
//     handleClick=() =>{ 
//         this.setState({wlcomeMassage: this.state.inputText })

//     };


//     render(){
//         return(
//                     <div className='BarSearchClass'>
//                         {/* <div>
//                         <h2> Search Bar</h2>
//                         </div>
                       
//                          */}
//                         <h2>State Example</h2>
//                         <div>{this.state.wlcomeMassage}</div>
//                         <input onChange={this.handleInputChang} type="text"/>
//                         <button onClick={this.handleClick}> Chang Welcome Massage</button>
//                     </div>
//                 );

//     }
// }
export default BarSearch;
