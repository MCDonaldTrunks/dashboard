import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MySidebar from "./components/sidebar";
import { lazy } from "react";

// *** Pages *** //
import Readings from "./pages/Readings/Readings";
import Dashboard from "./pages//Dashboard/Dashboard";
import Calendar from "./pages/Calendar/Calendar";
//const Calendar = lazy(() => import('./pages/Calendar'));
import Health from "./pages/Health/Health";
import Pictures from "./pages/Pictures/Pictures";
import Todo from "./pages/Todo/Todo";
import Financials from "./pages/Financials/Financials";
import Journal from "./pages/Journal/Journal";

//const Component = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Container>
      <MySidebar />
      <AppMain id="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Readings" element={<Readings />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Pictures" element={<Pictures />} />
          <Route path="/Financials" element={<Financials />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Journal" element={<Journal />} />
        </Routes>
      </AppMain>
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
