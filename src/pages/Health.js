import React, { useState } from "react";
import styled from "styled-components";
import HealthModal from "./HealthModal";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  z-index: 0;
  padding: 0 15px 15px 0;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #1c244b;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #313f83;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
`;

const healthInputs = [
  {
    type: "workout_event" /*'workout_event, diet_event, supplement_event,'*/,
    inputTitle: "run",
    datetime: `${new Date(Date.now)}`,
    maxedOut: true,
    type2: "cardio" /*'work, home_lifting, cardio'*/,
    amount: "reps, miles, time",
    comment: "",
  },
];

function Health() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(healthInputs);
  return (
    <>
      <Title>Health</Title>
      <StyledButton onClick={() => setModalOpen(true)}>Add Factor</StyledButton>
      <Wrapper>
        {data ? 
          Object.keys(data).map((item) => <div className={`card intense-${item.maxedOut}`}>
          <h3>Type: {`${healthInputs[item].type}`}<span id="type"></span></h3>
          <p>Title: {`${healthInputs[item].inputTitle}`}<span id="inputTitle"></span></p>
          <p>Datetime: {`${healthInputs[item].datetime}`}<span id="datetime"></span></p>
          <p>Maxed Out: {`${healthInputs[item].maxedOut}`}<span id="maxedOut"></span></p>
          <p>Type 2: {`${healthInputs[item].type2}`}<span id="type2"></span></p>
          <p>Amount: {`${healthInputs[item].amount}`}<span id="amount"></span></p>
          <p>Comment: {`${healthInputs[item].comment}`}<span id="comment"></span></p>
      </div>
            
        ) : (
          <h3> Error no data found</h3>
        )}
      </Wrapper>
      <HealthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        //onEventAdded={(event) => onEventAdded(event)}
        //addPicture={(item) => addPicture(item)}
        transfer={(item) => setData(item)}
      ></HealthModal>
    </>
  );
}

export default Health;
