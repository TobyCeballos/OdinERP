import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./middlewares/ProtectedRoute";
import Login from "./pages/LogIn.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Stock from "./pages/Stock.jsx";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<ProtectedRoute component={Home}/>} />
        <Route path="/stock" element={<ProtectedRoute component={Stock}/>} />
      </Routes>
    </Router>
  );
}

export default App;