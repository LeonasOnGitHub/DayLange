import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService";
import "./LoginPage.css";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError("");
        try {
            const data = isLogin
                ? await login(username, password)
                : await register(username, password);
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", username);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className="loginContainer">
            <h1>Daily Challenge</h1>

            <div className="loginCard">
                <h2 className="loginSubTitle">{isLogin ? "Login" : "Register"}</h2>

                <input
                    className="loginInput"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className="loginInput"
                    type="password"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="loginError">{error}</p>}

                <button className="loginButton" onClick={handleSubmit}>
                    {isLogin ? "Einloggen" : "Registrieren"}
                </button>

                <p className="loginSwitch">
                    {isLogin ? "Noch kein Account?" : "Bereits registriert?"}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? " Registrieren" : " Login"}
                    </span>
                </p>
            </div>
        </div>
    );
}