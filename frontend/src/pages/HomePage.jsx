import ChallengeCard from "../components/ChallengeCard";
import StreakCounter from "../components/StreakCounter";
import Button from "../components/Button";
import useChallenge from "../hooks/useChallenge";
import useStreak from "../hooks/useStreak";
import "./HomePage.css";

export default function Homepage() {
    const { streak, incrementStreak, resetStreak } = useStreak();
    const { challenge, getRandomChallenge, setStatus } = useChallenge();
    

    const handleCompleteChallenge = () => {
        setStatus("completed");
        incrementStreak();
    };

    const handleFailChallenge = () => {
        setStatus("failed");
        resetStreak();
    }

    return (
        <div className="homepageContainer">
            <h1 className="homepageTitle">Daily Challenge</h1>
            <StreakCounter streak={streak} />

            {challenge ? (
                <ChallengeCard
                    challenge={challenge}
                    onComplete={handleCompleteChallenge}
                    onFail={handleFailChallenge}
                />
            ) : (
                <p className="hint"> Drück den Button um deine Challenge zu erhalten!</p>
            )}

            {(!challenge || challenge.status !== "active") && (
                <Button onClick={getRandomChallenge}>
                    {challenge ? "🔀 Neue Challenge" : "✨ Challenge generieren"}
                </Button>
            )}
        </div>
    );
}
