import React, { useState } from "react";
import styled from "styled-components";
import ReadingsModal from "./ReadingsModal";

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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const EntryCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  width: 66%;
`;

const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 200px;
  background-color: #27496d;
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;

const DetailsSection = styled.div`
  width: 33%;
  padding: 10px;
  background-color: #1e2a45; // A slightly different shade for contrast
  color: white;
  border-radius: 8px;
  margin-left: auto; // Push to the right
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Readings() {
  const [modalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addOrUpdateBook = (book) => {
    if (selectedBook) {
      const updatedBooks = books.map((b) => (b.key === selectedBook.key ? { ...book, key: selectedBook.key } : b));
      setBooks(updatedBooks);
    } else {
      const key = getNextKey();
      setBooks([...books, { ...book, key }]);
    }
    setSelectedBook(null);
    setModalOpen(false);
  };

  const deleteBook = (key) => {
    setBooks(books.filter((book) => book.key !== key));
    setSelectedBook(null);
  };

  const openModalToAddOrUpdate = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const getNextKey = () => {
    return books.length ? String(Math.max(...books.map((book) => parseInt(book.key))) + 1).padStart(5, '0') : '00001';
  };

  return (
    <>
      <Title>Readings</Title>
      <StyledButton onClick={() => openModalToAddOrUpdate()}>Add Book</StyledButton>
      <Wrapper>
        <EntryCardsContainer>
          {books.map((book) => (
            <BookItem key={book.key} onClick={() => setSelectedBook(book)}>
              <img src={book.image} alt={book.title} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </BookItem>
          ))}
        </EntryCardsContainer>
        {selectedBook && (
          <DetailsSection>
            <img src={selectedBook.image} alt={selectedBook.title} style={{ width: "100%", height: "auto", borderRadius: "4px" }} />
            <h3>{selectedBook.title}</h3>
            <p>Author: {selectedBook.author}</p>
            {/* Display other selected book details here */}
            <StyledButton onClick={() => openModalToAddOrUpdate(selectedBook)}>Edit</StyledButton>
            <StyledButton onClick={() => deleteBook(selectedBook.key)}>Delete</StyledButton>
          </DetailsSection>
        )}
      </Wrapper>
      {modalOpen && (
        <ReadingsModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onBookSubmit={addOrUpdateBook}
          selectedBook={selectedBook}
        />
      )}
    </>
  );
}

export default Readings;
