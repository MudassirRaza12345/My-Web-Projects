import React, { Component } from 'react';
import './App.css';
import Login from './login/login';

class App extends Component {
  render(){
    return(
      <div className='app'> 
       <Login />
      </div>
    );
  }
}
export default App;
