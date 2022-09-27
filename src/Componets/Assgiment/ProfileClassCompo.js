import React, { Component } from 'react'

export default class ProfileClassCompo extends Component {
  render() {
    return (
      <div>
        
        <h2>My Biodata</h2>
        <p>my Name : {this.props.name}</p>
        <p>Age : {this.props.Age}</p>
        <p>City : {this.props.city}</p>
        <p>Fav Movie :{this.props.movie}</p>
        
      </div>
    )
  }
}

