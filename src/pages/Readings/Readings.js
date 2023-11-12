import React from "react";
import styled from "styled-components";
import { useState } from "react";

import ReadingsAddReadingModal from "./ReadingsAddReadingModal";

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
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
`;

const bookObject = {
  title: "",
  author: "",
  description: "",
  image: "",
  link: "",
  releaseDate: "",
  notes: [{ note1: "", note2: "", note3: "", note4: "" }],
  report: "",
};

const books = [
  {
    title: "Mastery",
    author: "Robert Greene",
    image: "https://i.ebayimg.com/images/g/SaAAAOSwVFNf~qpd/s-l500.jpg",
    releaseDate: "November 13, 2012",
  },
  {
    title: "Mastery",
    author: "Robert Greene",
    image: "https://i.ebayimg.com/images/g/SaAAAOSwVFNf~qpd/s-l500.jpg",
    releaseDate: "November 13, 2012",
  },
];


const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 120px;
  margin-right: 20px; 
`


function Readings() {
  const [modalOpen, setModalOpen] = useState(false);
  const onDataAdded = (data) => {
    console.log(data);
    books.push(data);
  };

  return (
    <>
      <Title>Readings</Title>
      <StyledButton onClick={() => setModalOpen(true)}>Add Book</StyledButton>
      <Wrapper>
        {books.map((book) => {
          return (
            <BookItem key={book.title}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
          
            </BookItem>
          );
        })} 
        
      </Wrapper>

      <ReadingsAddReadingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onDataAdded={(data) => onDataAdded(data)}
      ></ReadingsAddReadingModal>
    </>
  );
}

export default Readings;
