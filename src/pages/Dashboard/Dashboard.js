import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 30px;
  color: black;
  padding: 10px;
  font-family: "Roboto", sans-serif;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  .part {
    border: solid 1px #d5d8e6;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .07s ease-in-out;

    &:hover{
      transform: scale(1.02);
    }
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:visited{
    color: black;
  }
`

function Dashboard() {
  return (
    <React.Fragment>
      <Title>Dashboard</Title>
      <Wrapper>
        <div className="part calendar"><StyledLink to='/Calendar'>cal</StyledLink> </div>
        <div className="part financials"><StyledLink to='/Financials'>finan</StyledLink></div>
        <div className="part pictures"><StyledLink to='/Pictures'>pics</StyledLink></div>
        <div className="part readings"><StyledLink to='/Readings'>read</StyledLink></div>
        <div className="part health"><StyledLink to='/Health'>health</StyledLink></div>
        <div className="part todo"><StyledLink to='/Todo'>todo</StyledLink></div>
        <div className="part journal"><StyledLink to='/Journal'>journal</StyledLink></div>
        <div className="part "></div>
        <div className="part "></div>
      </Wrapper>
    </React.Fragment>
  );
}

export default Dashboard;
