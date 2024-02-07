import React, { useState } from "react";
import Modal from "./JournalModal.jsx";
import styled from "styled-components";

const Journal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Title>Journal</Title>
      <AddButton onClick={openModal}>Add Journal Entry</AddButton>
      <Wrapper></Wrapper>
      {/* Display past entries */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        
      >
        {/* Modal content goes here */}
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
width: auto;
height: auto;
color: white;
display: flex;
`;


const Title = styled.h1`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const AddButton = styled.button`
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

export default Journal;
