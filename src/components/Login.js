import React, { Component } from 'react';
import Loginform from './Loginform'


class Login extends Component {
    constructor(props){
        super(props)

        this.getInfo=this.getInfo.bind(this)
    }

    

    getInfo(data){
        //console.log(data)
        var fm = new FormData()  //pick values and send it in json form and add the url and post
        //post variable in php, $_POST(how to access it)->carrier
        fm.append('unm', data.username)
        fm.append('pwd',data.password)

        //sending data to the database
        fetch('http://aces.com/api', {method:'post', body:fm})
          .then(responsedata => responsedata.json())
            .then(actualdata => console.log(actualdata))
   
    }

    
  render(){
    return (
      <div>
        <Loginform messenger={this.getInfo}/>
      </div>
    );
  }
}

export default Login;
