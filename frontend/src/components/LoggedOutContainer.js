// src/components/LoggedOutContainer.js

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login";
import Register from "./Register";  // Adjust the path based on your directory structure

const LoggedOutContainer = () => {
  return (
    <Routes>
      {/* Define the login and register routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Redirect any other path to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default LoggedOutContainer;
