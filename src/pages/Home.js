import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hello from '../components/Hello';
import About from '../components/About';



class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Allen'
    }
    
    this.changeName= this.changeName.bind(this)
  }

  componentWillMount(){
    //Is a life cycle hook
    this.setState({name:'Kofi'})
  }

  changeName =() =>{
    this.setState({name:'John'})
  }
  
  render(){
    return (
      <div>
        <Link to='/about'>
          <About/>
        </Link>
          <br></br>
          <h1>{this.state.name}</h1>
          <button className='btn btn-primary' onClick={() => this.changeName()}>Change Name</button>
      </div>
    );
  }
}

export default Home;
