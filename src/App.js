import React from "react";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Authentication from "./components/template/Authentication";
import Admin from "./components/dashboard/Admin";
import User from "./components/dashboard/User";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <Authentication>
              <Register />
            </Authentication>
          }
        />
        <Route
          path="signin"
          element={
            <Authentication>
              <Login />
            </Authentication>
          }
        />
        <Route path="dashbord" element={<Admin />} />
        <Route path="profile" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
