import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MySidebar from "./components/MySidebar";
import Login from "./components/login/Login";

// *** Pages *** //
import Readings from "./pages/Readings/Readings";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calendar from "./pages/Calendar/Calendar";
import Health from "./pages/Health/Health";
import Pictures from "./pages/Pictures/Pictures";
import Todo from "./pages/Todo/Todo";
import Financials from "./pages/Financials/Financials";
import Journal from "./pages/Journal/Journal";

// Protected Route Component
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Check if the user is authenticated by checking if the token is in localStorage
  const token = localStorage.getItem('access');

  return (
    <Container>
      {/* Only show the sidebar and main content if the user is logged in */}
      {token ? (
        <>
          <MySidebar />
          <AppMain id="main">
            <Routes>
              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Calendar"
                element={
                  <ProtectedRoute>
                    <Calendar />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Readings"
                element={
                  <ProtectedRoute>
                    <Readings />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Health"
                element={
                  <ProtectedRoute>
                    <Health />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Pictures"
                element={
                  <ProtectedRoute>
                    <Pictures />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Financials"
                element={
                  <ProtectedRoute>
                    <Financials />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Todo"
                element={
                  <ProtectedRoute>
                    <Todo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Journal"
                element={
                  <ProtectedRoute>
                    <Journal />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AppMain>
        </>
      ) : (
        // If the user is not logged in, show only the login component
        <Login />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AppMain = styled.div`
  background-color: #15215d;
  flex-grow: 1;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default App;
