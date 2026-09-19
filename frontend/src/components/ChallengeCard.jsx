import "./ChallengeCard.css";
import CategoryBadge from "./CategoryBadge";
import Button from "./Button";

export default function ChallengeCard({ challenge, onComplete, onFail }) {
  return (
    <div className={`card ${challenge.status}`}>
      <CategoryBadge category={challenge.category} />
      <div className="emoji">{challenge.emoji}</div>
      <h2 className="challengeTitle">{challenge.title}</h2>
      <p className="description">{challenge.description}</p>

      {challenge.status === "active" && (
        <div className="buttonRow">
          <Button onClick={onComplete} color="#4caf50">Erledigt!</Button>
          <Button onClick={onFail} color="#e53935">Nicht geschafft</Button>
        </div>
      )}

      {challenge.status === "completed" && (
        <p className="statusText completed">✅ Challenge erledigt! 💪</p>
      )}

      {challenge.status === "failed" && (
        <p className="statusText failed">❌ Schade, nächstes Mal!</p>
      )}
    </div>
  );
}