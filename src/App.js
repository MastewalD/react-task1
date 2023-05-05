import React from 'react';
import './style.css';
import Home from './component/Home';
import Register from './component/signup/Register';
import Login from './component/signup/Login';
import Dashboard from "./component/user/Dashboard"
import AddUser from "./component/user/AddUser"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign up</Link>
          <Link to="/dashboard">dashboard</Link>
          <Link to="/adduser">AddUser</Link>
          
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}
