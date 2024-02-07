import React, { useState } from "react";
import styled from "styled-components";
import HealthModal from "./HealthModal";
import "animate.css";

const Wrapper = styled.div`
  width: auto;
  height: auto;
  color: white;
  z-index: 0;
  padding: 0 15px 15px 0;
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

const formColors = {
  'Exercise': 'blue',
  'Diet': 'green',
  'Sleep': 'red',
  'Supplements': 'purple',
};

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
`;

function renderFactorByType(item) {
  const color = formColors[item.type] || 'sleek-blue'; // Default to sleek blue if type not found
  return (
    <Factor>
      <Circle color={color} />
      <div>
        <h3>{item.type} Factor</h3>
        <p>Type of {item.type}: {item[item.type.toLowerCase() + 'Type']}</p>
        <p>Datetime: {item.datetime}</p>
        {/* Include rendering for other properties here */}
      </div>
    </Factor>
  );
}

const healthInputs = [
  
];

const Factor = styled.div`
  float: left;
  display: flex;
  background-color: #15215d;
  color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  align-items: center; /* Center vertically */
`;

function Health() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(healthInputs);
  const [active, setActive] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const addInput = (newInput) => {
    setData((prevData) => [...prevData, newInput]);
    closeModal();
  };


  return (
    <>
      <Title
        className={active ? "animate__animated animate__bounce" : ""}
        onClick={() => setActive(!active)}
      >
        Health
      </Title>
      <StyledButton onClick={openModal}>Add Factor</StyledButton>
      <Wrapper>
        {data ? (

          data.map((item) => 
            renderFactorByType(item)
          )
          // Object.keys(data).map((item) => (
          //   <Factor className={`card intense-${item.maxedOut}`}>
          //     <h3>
          //       Type: {`${healthInputs[item].type}`}
          //       <span id="type"></span>
          //     </h3>
          //     <p>
          //       Title: {`${healthInputs[item].inputTitle}`}
          //       <span id="inputTitle"></span>
          //     </p>
          //     <p>
          //       Datetime: {`${healthInputs[item].datetime}`}
          //       <span id="datetime"></span>
          //     </p>
          //     <p>
          //       Maxed Out: {`${healthInputs[item].maxedOut}`}
          //       <span id="maxedOut"></span>
          //     </p>
          //     <p>
          //       Type 2: {`${healthInputs[item].type2}`}
          //       <span id="type2"></span>
          //     </p>
          //     <p>
          //       Amount: {`${healthInputs[item].amount}`}
          //       <span id="amount"></span>
          //     </p>
          //     <p>
          //       Comment: {`${healthInputs[item].comment}`}
          //       <span id="comment"></span>
          //     </p>
          //   </Factor>
          // ))
        ) : (
          <h3> Error no data found</h3>
        )}
      </Wrapper>
      <HealthModal
        isOpen={modalOpen}
        onClose={closeModal}
        inputSubmit={addInput}
        //onEventAdded={(event) => onEventAdded(event)}
        //addPicture={(item) => addPicture(item)}
      ></HealthModal>
    </>
  );
}

export default Health;
