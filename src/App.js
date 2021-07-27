import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import MyForm from './MyFrom';
import Employee from './Employee';
// create other components and import them here. 

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome name="Vaman" phone="9876543210"> </Welcome>
      <h1>App Component</h1>
      <p>This is the app component.</p>

      <Footer/>
      <MyForm/>
      <Employee/>
    </div>
  );
}
export default App;

