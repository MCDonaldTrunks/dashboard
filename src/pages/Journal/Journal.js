import React, { useState } from "react";
import Modal from "./JournalModal.jsx";
import styled from "styled-components";

const Journal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [data, setData] = useState([{title: '1', date: 'date one'}]);

  const addEntry = (entry) => {
    setData((prevData) => [...prevData, entry]);
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const displayEntries = () => {
    return data.map((entry) => {
      return (
        < JournalEntry
          
          key={entry.title}
          title={entry.title}
          date={entry.date}
        >
          {`${entry.title}`} <br />
          {entry.date}

        </JournalEntry>
      );
    });
  }

  return (
    <>
      <Title>Journal</Title>
      <AddButton onClick={openModal}>Add Journal Entry</AddButton>
      <Wrapper className="wrapper">
      {displayEntries()}
      </Wrapper>
      
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onSubmit={addEntry}
        
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
flex-wrap: wrap;
`;


const Title = styled.h1`
font-size: 30px;
margin-bottom: 20px;
color: white;

`;

const AddButton = styled.button`
font-size: 10px;
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
`
const JournalEntry = styled.div`
height: 100px;
width: 100px;
background-color: red;
color: black;
margin: 0 20px 20px 0;
display: flex;
shrink: false;
`
export default Journal;
