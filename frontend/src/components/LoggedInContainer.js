import React from "react";
import { Route, Routes } from "react-router-dom";
import MySidebar from "./MySidebar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Calendar from "../pages/Calendar/Calendar";
import Readings from "../pages/Readings/Readings";
import Health from "../pages/Health/Health";
import Financials from "../pages/Financials/Financials";
import ProtectedRoute from "./ProtectedRoute";
import styled from "styled-components";

// Define the styled components for the layout
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MainContent = styled.div`
  background-color: #15215d;
  flex-grow: 1;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LoggedInContainer = () => {
  return (
    <Container>
      <MySidebar />
      <MainContent>
        {/* Wrap all routes in a single <ProtectedRoute> */}
        <ProtectedRoute>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/readings" element={<Readings />} />
            <Route path="/health" element={<Health />} />
            <Route path="/financials" element={<Financials />} />
          </Routes>
        </ProtectedRoute>
      </MainContent>
    </Container>
  );
};

export default LoggedInContainer;
