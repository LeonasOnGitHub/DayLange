import { useState, useEffect } from "react";
import challenges from "../data/challenges";
import { saveChallenge, loadChallenge, saveDate, loadDate } from "../services/storageService";

export default function useChallenge(resetStreak) {
  const [challenge, setChallenge] = useState(() => loadChallenge());

  const getRandomChallenge = () => {
    const random = challenges[Math.floor(Math.random() * challenges.length)];
    const newChallenge = { ...random, status: "active" };
    setChallenge(newChallenge);
    saveChallenge(newChallenge);
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const savedDate = loadDate();

    if (savedDate !== today) {
      if (challenge?.status !== "completed" && typeof resetStreak === "function") {
        resetStreak();
      }
      getRandomChallenge();
      saveDate(today);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setStatus = (status) => {
    setChallenge((prev) => {
      const updated = { ...prev, status };
      saveChallenge(updated);
      return updated;
    });
  };

  return { challenge, getRandomChallenge, setStatus };
}