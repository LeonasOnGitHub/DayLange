import { useNavigate } from "react-router-dom";
import StreakCounter from "./StreakCounter";
import "./TopRow.css";

export default function TopRow({ streak }) {
  const navigate = useNavigate();

  return (
    <div className="topRow">
      <StreakCounter streak={streak} />
      <div className="leaderboardBox" onClick={() => navigate("/leaderboard")}>
        <span className="leaderboardLabel">Rangliste</span>
        <span className="leaderboardTrophy">🏆</span>
      </div>
    </div>
  );
}