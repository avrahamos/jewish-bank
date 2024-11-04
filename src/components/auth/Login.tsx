import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (
      userName &&
      password &&
      localStorage.getItem("userName") === userName &&
      localStorage.getItem("password") === password
    ) {
      localStorage.setItem("isLogin", "true");
      navigate("/pages");
    } else {
      alert("Please provide valid username and password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
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
          <button disabled={!userName || !password} onClick={handleLogin}>
            Submit
          </button>
        </div>
        <div>
          <p>
            Don't have an account?{" "}
            <Link to="/auth/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
