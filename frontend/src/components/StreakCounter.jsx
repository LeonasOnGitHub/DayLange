import "./StreakCounter.css";

export default function StreakCounter({ streak }) {
  return (
    <div className="streakContainer">
     
      <div className="countRow">
        <span className="count">{streak}</span>
        <span className="fire">🔥</span>
      </div>
       
    </div>
  );
}