import { useState } from "react";
import { saveStreak, loadStreak } from "../services/storageService";

export default function useStreak() {
    const [streak, setStreak] = useState(() => loadStreak());

    const incrementStreak = () => {
        setStreak((prev) => {
            const next = prev + 1;
            saveStreak(next);
            return next;
        });
    };

    const resetStreak = () => {
        setStreak(0);
        saveStreak(0);
    };

    return { streak, incrementStreak, resetStreak };
}
