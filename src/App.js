import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

// create other components and import them here. 

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>App Component</h1>
      <p>This is the app component.</p>
      <Footer/>
    </div>
  );
}
export default App;

