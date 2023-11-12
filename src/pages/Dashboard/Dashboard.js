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
        <div className="part financials">finan</div>
        <div className="part pictures">pics</div>
        <div className="part readings">read</div>
        <div className="part health">health</div>
        <div className="part todo">todo</div>
        <div className="part journal">journal</div>
        <div className="part "></div>
        <div className="part "></div>
      </Wrapper>
    </React.Fragment>
  );
}

export default Dashboard;
