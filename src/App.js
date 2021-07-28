import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';


// create other components and import them here. 

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}
export default App;

