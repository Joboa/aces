import React, { Component } from 'react';


class Hello extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
  render(){
    return (
      <div>
        <h1>My is {this.props.name}</h1>
        <h1>I'm {this.props.age}</h1>
        <h1>I hail from {this.props.hometown}</h1>
      </div>
    );
  }
}

export default Hello;
