import './App.css';
import React from 'react';
import { promise } from '../apiCalls';

function App() {
  let data = promise.then((data) => {
    console.log('data:', data)
  })

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 