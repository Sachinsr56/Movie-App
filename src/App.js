
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey programmer lets build a project</h1>
      <Row title="NETFLIX ORIGINALS"  />
      <Row title="Trending Now" />
    
    </div>
  );
}

export default App;
