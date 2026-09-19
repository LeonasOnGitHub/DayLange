import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLeaderboard } from "../services/authService";
import "./LeaderboardPage.css";

export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLeaderboard = async () => {

            try {
                const data = await getLeaderboard();
                console.log("Leaderboard data:", data);
                setLeaderboard(data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchLeaderboard();
    }, []);
    return (<div className="leaderboardContainer">
        <div className="leaderboardHeader">
            <button className="backButton" onClick={() => navigate("/")}>
                🔙
            </button>
            <h1 className="leaderboardTitle">🏆 Leaderboard 🏆</h1>
        </div>

        {error && <p className="leaderboardError">{error}</p>}

        <div className="leaderboardList">
            {leaderboard.map((entry) => (
                <div key={entry.rank} className={`leaderboardEntry rank${entry.rank}`}>
                    <span className="rank">
                        {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : `#${entry.rank}`}
                    </span>
                    <span className="leaderboardUsername">{entry.username}</span>
                    <span className="leaderboardStreak">{entry.streak} 🔥</span>
                </div>
            ))}
        </div>
    </div>
    );
}