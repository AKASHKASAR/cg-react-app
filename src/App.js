import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';
// import Footer2 from './components/Footer2';
// import CgAppBar from './components/CgAppBar';

// create other components and import them here. 
// npm i --save @material-ui/core 
// npm i --save @material-ui/icons 

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

