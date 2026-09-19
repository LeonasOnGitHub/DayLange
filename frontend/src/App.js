import "./App.css";
import ChallengeCard from "./components/ChallengeCard";
import Button from "./components/Button";
import useChallenge from "./hooks/useChallenge";
import useStreak from "./hooks/useStreak";
import StreakCounter from "./components/StreakCounter";


export default function App() {
  const { streak, incrementStreak, resetStreak } = useStreak();
  const { challenge, setStatus, getRandomChallenge } = useChallenge(resetStreak);

  const handleComplete = () => {
    setStatus("completed");
    incrementStreak();
  };

  const handleFail = () => {
    setStatus("failed");
    resetStreak();
  };

  return (
    <div className="container">
      <h1 className="title">Daily Challenge</h1>
      <StreakCounter streak={streak} />

      {challenge ? (
        <ChallengeCard
          challenge={challenge}
          onComplete={handleComplete}
          onFail={handleFail}
        />
      ) : (
        <p className="hint">👆 Drück den Button um deine Challenge zu erhalten!</p>
      )}

      {(!challenge || challenge.status !== "active") && (
        <Button onClick={getRandomChallenge}>
          {challenge ? "🔀 Neue Challenge" : "✨ Challenge generieren"}
        </Button>
      )}
    </div>
  );
}

