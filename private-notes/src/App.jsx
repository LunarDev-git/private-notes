import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      {/* Global nav */}
      <nav>
        <Link to="/Login">Login</Link>
        <Link to="/Dashboard">Dashboard</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
