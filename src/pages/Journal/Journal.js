// JournalApp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import JournalModal  from './JournalModal' ;

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

const EntryContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  z-index: 0;
  padding: 0 15px 15px 0;
`;

const EntryCard = styled.div`
  padding-right: 20px;
`



const JournalApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entries, setEntries] = useState([
    { date: '2023-12-01', title: 'Entry 1', text: 'Lorem ipsum dolor sit amet.' },
    { date: '2023-12-02', title: 'Entry 2', text: 'Consectetur adipiscing elit.' },
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
    closeModal();
  };

  return (
    <div>
      <Title>Journal</Title>

      <StyledButton onClick={openModal}>Add Entry</StyledButton>

      
        <EntryContainer>
          {entries.map((entry, index) => (
            <EntryCard key={index} className="entry-card">
              <p>Date: {entry.date}</p>
              <p>Title: {entry.title}</p>
              <p>{entry.text}</p>
            </EntryCard>
          ))}
        </EntryContainer>
      

      <JournalModal
        isOpen={isModalOpen}
        onClose={closeModal}
        contentLabel="Journal Entry Form"
        
      >
        
      </JournalModal>
    </div>
  );
};

export default JournalApp;
