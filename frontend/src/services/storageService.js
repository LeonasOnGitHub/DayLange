const KEYS = {
  challenge: "challenge",
  streak: "streak",
  date: "date",
};

export function saveChallenge(challenge) {
  localStorage.setItem(KEYS.challenge, JSON.stringify(challenge));
}

export function loadChallenge() {
  const saved = localStorage.getItem(KEYS.challenge);
  return saved ? JSON.parse(saved) : null;
}

export function saveStreak(streak) {
  localStorage.setItem(KEYS.streak, JSON.stringify(streak));
}

export function loadStreak() {
  const saved = localStorage.getItem(KEYS.streak);
  return saved ? JSON.parse(saved) : 0;
}

export function saveDate(date) {
  localStorage.setItem(KEYS.date, date);
}

export function loadDate() {
  return localStorage.getItem(KEYS.date);
}