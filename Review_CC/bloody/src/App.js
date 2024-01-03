

import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../src/Components/Pages/Home";
import Login from "../src/Components/Pages/Login";
import Navbar from "./Components/Pages/Navbar";
import About from "../src/Components/Pages/About";
import Signup from "../src/Components/Pages/Signup";
import Dashboard from "../src/Components/Pages/Dashboard";
//check
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Login/>
            </>
          }
          />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
          />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
          />

        <Route
          path="/dashboard"
          element={
            <>
            <Navbar/>
              <Dashboard />
            </>
          }
          />

        <Route
          path="/signup"
          element={
            <>
            <Navbar/>
              <Signup />
            </>
          }
          />
      </Routes>
          </>
  );
}

export default App;

