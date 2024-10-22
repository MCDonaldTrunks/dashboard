import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import LoggedInContainer from "./components/LoggedInContainer";
import LoggedOutContainer from "./components/LoggedOutContainer";

function App() {
  // Get authentication state from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle redirection based on authentication status
  useEffect(() => {
    if (isAuthenticated && location.pathname === "/login") {
      // Redirect to home page if logged in and trying to access login page
      navigate("/");
    } else if (!isAuthenticated && location.pathname !== "/register" && location.pathname !== "/login") {
      // Redirect to login page if trying to access a protected path without being authenticated
      navigate("/login");
    }
  }, [isAuthenticated, location, navigate]);

  return (
    <>
      {/* If user is authenticated, show the logged-in container, otherwise show the logged-out container */}
      {isAuthenticated ? <LoggedInContainer /> : <LoggedOutContainer />}
    </>
  );
}

export default App;
