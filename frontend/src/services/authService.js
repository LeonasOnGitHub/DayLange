const BASE_URL = 'http://localhost:8080/api';


export async function register(username, password) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }
    return response.json();
}


export async function login(username, password) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.json();
}

export async function getLeaderboard() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/leaderboard`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
    }
    return response.json();
}

export async function updateStreak(action) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/user/streak`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ action }),
  });

  if (!response.ok) throw new Error("failed to update streak");
  return response.json();
}

export async function getProfile() {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/user/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error("Failed to fetch profile");
    }
    return response.json();
}
