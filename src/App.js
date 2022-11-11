import React from "react";
import Login from "./components/auth/Login";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/auth/Register";
import Home from "./components/Home";
import Authentication from "./components/template/Authentication";
import Admin from "./components/dashboard/Admin";
import User from "./components/dashboard/User";
import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.user);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
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
        <Route path="profile" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
