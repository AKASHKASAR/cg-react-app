import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import MyForm from './components/MyForm';
import Employee from './components/Employee';
// create other components and import them here. 

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome name="Sonu" phone="9876543210"> </Welcome>
      <h1  className="display-1 text-primary">App Component</h1>
      <p>This is the app component.</p>
      <MyForm/>
      <Employee/>
      <Footer/>
    </div>
  );
}
export default App;

