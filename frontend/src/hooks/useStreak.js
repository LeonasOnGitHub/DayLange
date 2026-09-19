import { useState, useEffect } from "react";
import { saveStreak, loadStreak } from "../services/storageService";
import { updateStreak, getProfile } from "../services/authService";

export default function useStreak() {
    const [streak, setStreak] = useState(() => loadStreak());

    useEffect(() => {
        const fetchStreak = async () => {
            try {
                const profile = await getProfile();
                setStreak(profile.streak);
                saveStreak(profile.streak);
            } catch (error) {
                console.error("Failed to fetch profile:", error.message);
            }
        };

        fetchStreak();
    }, []);

    const incrementStreak = async () => {
        setStreak((prev) => {
            const next = prev + 1;
            saveStreak(next);
            return next;
        });
        try {
            await updateStreak("increment");
   
        } catch (error) {
            console.error("Failed to update streak:", error.message);
        }
    };

    const resetStreak = async () => {
        setStreak(0);
        saveStreak(0);
        try {
            await updateStreak("reset");
        } catch (error) {
            console.error("Failed to update streak:", error.message);
        }
    };

    return { streak, incrementStreak, resetStreak };
}
