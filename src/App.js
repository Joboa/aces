import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import CustomNavbar from './components/CustomNavbar'
import Itemcontainer from './components/Itemcontainer'
import Details from './pages/Details'
import Hire from './pages/Hire'
import Login from './components/Login'

//import Home from './pages/Home';
//import Dashboard from './pages/Dashboard';
import Newhome from './pages/Newhome';


class App extends Component {
  render(){
    return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={Login}/>
        {/* <Route exact path="/"  component={Newhome}/> */}
        <Route exact path="/details" component={Details} />
        <Route exact path="/hire" component={Hire} />

        <Route render={() => 'Page Not Found'} />
      </Switch>

      </>
    );
  }
}

export default App;
