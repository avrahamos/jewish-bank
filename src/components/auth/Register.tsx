import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleRegister = () => {
    if (!userName || !password) return;
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
    setIsLogin(false);
    navigate("/auth/login");
  };

  return (
    <div>
      <h1>Register</h1>
      <div className="form">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="user name"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button disabled={!userName || !password} onClick={handleRegister}>
          Submit
        </button>
      </div>
      <div>
        <p>
          Already have an account? <Link to="/auth/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
