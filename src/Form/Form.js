import { useState } from 'react';
import './Form.css';

function Form({addResy}){
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  function submitResy(event) {
    event.preventDefault();
    const newResy = {
      id: Date.now(),
      name,
      date,
      time,
      number
    };
    addResy(newResy);
    clearInput();
  }
  function clearInput() {
    setName("");
    setDate("");
    setTime('');
    setNumber(0)
  }
    return (
      <form>
        <input
          type='text'
          placeholder='Name for reservation'
          name='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type='text'
          placeholder='Date MM/DD'
          name='date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
        <input
          type='number'
          placeholder='# of guests'
          name='number'
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />

        <button onClick={(event) => submitResy(event)}>Make Reservation</button>
      </form>
    )
}

export default Form;