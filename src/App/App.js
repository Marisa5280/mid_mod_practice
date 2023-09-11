import './App.css';
import React, { useEffect, useState } from 'react';
import { getPromise, deletePromise } from '../apiCalls';
import Resys from '../Resys/resys';
import Form from '../Form/Form';

function App() {
  const [resys, setResys] = useState([])
  
  useEffect(() => {
  getPromise.then((data) => {
    console.log('data:', data)
    setResys(data)
  })
}, [resys])

function addResy(newResy) {
  setResys([...resys, newResy]);
}

  function cancelResy(id) {
    return (
    deletePromise(id).then((data) => setResys(data))
    )
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form addResy={addResy} />
      <Resys resys={resys} cancelResy={cancelResy} />
    </div>
  );
}

export default App; 