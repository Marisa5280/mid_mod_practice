import './Card.css';

function Card({name, date, time, number, id, cancelResy}){
  return (
    <div className="card">
      <h3 className='card-name'>{name}</h3>
      <h3 className='card-date'>{date}</h3>
      <h3 className='card-time'>{time}</h3>
      <h3 className='card-number'>Number of guests: {number}</h3>
      <button className='card-cancel' onClick={() => cancelResy(id)}>Cancel</button>
    </div>
  )
}

export default Card;