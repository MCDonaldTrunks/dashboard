import React, { useState } from "react";
import styled from "styled-components";
import HealthModal from "./HealthModal";
import "animate.css";

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
  
];

const Factor = styled.div``;

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


  const addHealthInput = (newInput) => {
    setData((prevData) => [...prevData, newInput]);
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

          healthInputs.map((item) => 
            
              <p>{`${item}`}</p>
            
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
        onHealthInputAdded={addHealthInput}
        //onEventAdded={(event) => onEventAdded(event)}
        //addPicture={(item) => addPicture(item)}
        transfer={(item) => setData(item)}
      ></HealthModal>
    </>
  );
}

export default Health;
