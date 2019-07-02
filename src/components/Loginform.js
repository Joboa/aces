import React, { Component } from 'react';


class Loginform extends Component {
    constructor(props){
        super(props)

        //Grabbing data from the user
        this.state = {
            username:'',
            password:'',
            error: ''

        
        }
        //console.log(this.props.messenger)
        
        //binding function to the class
        this.myOnChange=this.myOnChange.bind(this)
        this.send=this.send.bind(this)
    }

    //Onchage function grabs the input by a user
    myOnChange(e){
        //console.log(e.target.name)
        this.setState({[e.target.name]: e.target.value})
    }

    //sending user details
    send(){
      if (this.state.username == '' || this.state.password=='')
      { this.setState({error:'Username or password is empty'})} 

      else {
        this.props.messenger(this.state)    
      }
        
      //console.log(this.state)
      
    }
   
  render(){
      //console.log(this.state)
    return (
      <div>
        <h4>{this.state.error}</h4>
        <input type="text" name="username" id="" placeholder="username" 
           onChange={this.myOnChange}/>

        <input type="password" name="password" id="" placeholder="password"
           onChange={this.myOnChange}/>

        <button className='animated lightSpeedIn' onClick={this.send}>Login</button>
      </div>
    );
  }
}

export default Loginform;
