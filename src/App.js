import React from "react";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/auth/Register";
import LandingPage from "./components/LandingPage";
import Authentication from "./components/template/Authentication";
import Admin from "./components/dashboard/Admin";
import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.user);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
        <Route path="dashbord" element={<Admin userList={userList} />} />
        <Route path="profile" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
