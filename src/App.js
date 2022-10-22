import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./test";
import Home from "./components/Home";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<Test />} />
        <Route path="/login" element={<Test />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
