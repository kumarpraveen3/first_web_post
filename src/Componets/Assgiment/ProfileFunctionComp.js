import React from 'react'

const ProfileFunctionComp = ( props) => {
  return (
    <div>
       <h2>My Biodata</h2>
        <p>my Name : {props.name}</p>
        <p>Age : {props.Age}</p>
        <p>City : {props.city}</p>
        <p>Fav Movie :{props.movie}</p> 

    </div>
  )
}

export default ProfileFunctionComp
