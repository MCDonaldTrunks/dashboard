import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import styled from "styled-components";

// ****Icons****
import MenuIcon from "@mui/icons-material/Menu";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import EventIcon from "@mui/icons-material/Event";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CreateIcon from '@mui/icons-material/Create';

const StyledSidebar = styled(Sidebar)`
  position: relative;
  color: #fff;
  height: 100%;
  z-index: 0;
  ::-webkit-scrollbar {
  width: 5px;
  }

  ::-webkit-scrollbar-thumb {
  background: rgb(153 153 153 / 0.27);
  opacity: .01;
  border-radius: 10px;
 }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
    
  }
`;

const MenuIconBox = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledMenu = styled(Menu)`
  li:not(.sub) {
    margin-top: 30px;
  }

  .sub {
    margin: none;
    .sub {
      margin: none;
    }
  }
`;

const StyledMenuItem = styled(MenuItem)``;

const MySidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState("Dashboard");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledSidebar
      collapsed={collapsed}
      backgroundColor="#1C244B"
      style={{ border: "none", color: "#FBEAEB", fontFamily: "Roboto" }}
    >
      <MenuIconBox>
        <MenuIcon onClick={toggleSidebar} style={{ cursor: "pointer" }} />
      </MenuIconBox>
      <StyledMenu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0) {
              return {
                color: disabled ? "pink" : "#D5D8E6",
                backgroundColor: active ? "#088001" : undefined,
                "&:hover": {
                  backgroundColor: active ? "#088001" : "#313F83",
                  color: "white !important",
                },
              };
            }
            if (level === 1) {
              return {
                color: disabled ? "#eee" : "#D5D8E6",
                backgroundColor: active ? "#fff" : "#1C244B",
                "&:hover": {
                  backgroundColor: active ? "red" : "#313F83",
                  color: "white !important",
                },
              };
            }
          },
        }}
      >
        <SubMenu
          className="sub"
          icon={<SettingsIcon />}
          label={collapsed ? "" : "Set up"}
        >
          <StyledMenuItem className="sub"> Settings </StyledMenuItem>
          <StyledMenuItem className="sub"> Account </StyledMenuItem>
        </SubMenu>
        <StyledMenuItem
          onClick={() => setActive("Dashboard")}
          active={active === "Dashboard"}
          component={<Link to="/" />}
          icon={<DashboardIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Dashboard</span>}{" "}
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => setActive("Readings")}
          active={active === "Readings"}
          component={<Link to="/Readings" />}
          icon={<ImportContactsIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Readings</span>}{" "}
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => setActive("Calendar")}
          active={active === "Calendar"}
          component={<Link to="/Calendar" />}
          icon={<EventIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Calendar</span>}{" "}
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => setActive("Pictures")}
          active={active === "Pictures"}
          component={<Link to="/Pictures" />}
          icon={<PhotoSizeSelectActualIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Pictures</span>}{" "}
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => setActive("Health")}
          active={active === "Health"}
          component={<Link to="/Health" />}
          icon={<FavoriteIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Health</span>}{" "}
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => setActive("Financials")}
          active={active === "Financials"}
          component={<Link to="/Financials" />}
          icon={<AttachMoneyIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Financials</span>}{" "}
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => setActive("Todo")}
          active={active === "Todo"}
          component={<Link to="/Todo" />}
          icon={<CheckBoxIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Todo</span>}{" "}
        </StyledMenuItem>
        <StyledMenuItem
          onClick={() => setActive("Journal")}
          active={active === "Journal"}
          component={<Link to="/Journal" />}
          icon={<CreateIcon />}
        >
          {" "}
          {collapsed ? "" : <span>Journal</span>}{" "}
        </StyledMenuItem>
      </StyledMenu>
    </StyledSidebar>
  );
};

export default MySidebar;
