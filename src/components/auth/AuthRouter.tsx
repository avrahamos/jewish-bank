import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import LoginGuard from "../../guards/LoginGuard";
import Logout from "./LogOut";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route
        path="/logout"
        element={
          <LoginGuard>
            <Logout />
          </LoginGuard>
        }
      />
    </Routes>
  );
}
