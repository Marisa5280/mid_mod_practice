import Card from "../Card/Card";
import "./Resys.css";

function Resys({ resys, cancelResy }) {
  return (
    <div className="resys-container">
      <ResyCards resys={resys} cancelResy={cancelResy} />
    </div>
  );
}

function ResyCards({ resys, cancelResy }) {
  return resys.map((resy) => {
    return (
    <Card
      id={resy.id}
      name={resy.name}
      date={resy.date}
      time={resy.time}
      number={resy.number}
      cancelResy={cancelResy}
    />
    )
  });
}

export default Resys;
