import React, { useState } from 'react';
import styled from 'styled-components';
import FinancialsModal from './FinancialsModal';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  color: white;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  border-right: 1px solid white;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;
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

const EntryCard = styled.div`
  background-color: ${(props) => (props.type === 'expense' ? '#800020' : '#15215d')};
  color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
`;

const DetailSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const NoEntriesText = styled.p`
  color: #ccc;
`;

function Financials() {
  const [modalOpen, setModalOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const addOrUpdateEntry = (entry) => {
    if (selectedEntry) {
      // Update existing entry
      const updatedEntries = entries.map((e) => (e.key === selectedEntry.key ? { ...entry, key: selectedEntry.key } : e));
      setEntries(updatedEntries);
    } else {
      // Add new entry
      const key = String(entries.length + 1).padStart(5, '0');
      setEntries([...entries, { ...entry, key }]);
    }
    setSelectedEntry(null);
    setModalOpen(false);
  };

  const deleteEntry = (keyToDelete) => {
    setEntries(entries.filter(entry => entry.key !== keyToDelete));
    setSelectedEntry(null);
  };

  const selectEntry = (entry) => {
    setSelectedEntry(entry);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <PageWrapper>
      <Title>Financials</Title>
      <AddButton onClick={() => { setSelectedEntry(null); openModal(); }}>Add Entry</AddButton>
      <Wrapper>
        {/* Earnings Section */}
        <Section>
          <h2>Earnings</h2>
          {entries.filter(entry => entry.type === 'earning').map((entry) => (
            <EntryCard key={entry.key} onClick={() => selectEntry(entry)} type={entry.type}>
              <p>{entry.date}</p>
              <p>{entry.category}: {entry.amount}</p>
            </EntryCard>
          ))}
        </Section>
        {/* Expenses Section */}
        <Section>
          <h2>Expenses</h2>
          {entries.filter(entry => entry.type === 'expense').map((entry) => (
            <EntryCard key={entry.key} onClick={() => selectEntry(entry)} type={entry.type}>
              <p>{entry.date}</p>
              <p>{entry.category}: {entry.amount}</p>
            </EntryCard>
          ))}
        </Section>
        {/* Detail/Edit/Delete Section */}
        <DetailSection>
          {selectedEntry ? (
            <>
              <p>Date: {selectedEntry.date}</p>
              <p>Category: {selectedEntry.category}</p>
              <p>Amount: {selectedEntry.amount}</p>
              <p>Type: {selectedEntry.type}</p>
              <p>Notes: {selectedEntry.notes}</p>
              <button onClick={() => deleteEntry(selectedEntry.key)}>Delete</button>
              <button onClick={openModal}>Edit</button>
            </>
          ) : (
            <NoEntriesText>Please select an entry to see details</NoEntriesText>
          )}
        </DetailSection>
      </Wrapper>
      {modalOpen && <FinancialsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={addOrUpdateEntry}
        selectedEntry={selectedEntry}
      />}
    </PageWrapper>
  );
}

export default Financials;
