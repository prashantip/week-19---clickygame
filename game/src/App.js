import React from 'react';
import Jumbotron from './components/Jumbotron';
import MainSection from './components/MainSection';
import './App.css';

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainSection /> 
  </div>
);

export default App;
