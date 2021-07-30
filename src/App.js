import React from 'react';
import './App.css';
import Routes from './components/Routes';
// import Footer2 from './components/Footer2';
// import CgAppBar from './components/CgAppBar';

// create other components and import them here. 
// npm i --save react-table
// npm i --save axios 

// npm i --save @material-ui/core 
// npm i --save @material-ui/icons 

// 1. header, routes, app - for header menu bar 
// 2. employee, hello - for spring boot conneciton 


let handleCallback = (childData) => {
  this.setState({ name: childData })
}

const App = () => {
  return (
    <div>
      <Routes/>
    </div>
  );
}
export default App;

