import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPictures, uploadPicture } from "../../slices/pictureSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import PicturesModal from "./PicturesModal"; // Import the add picture modal
import styled from "styled-components";

// Styled Components
const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 97vh;
  color: #e0e1dd;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const PicturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const PictureCard = styled.div`
  position: relative;
  background-color: #1b263b;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  max-height: 250px;
  width: 100%;
  height: auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 5px;
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: rgba(255, 0, 0, 0.7);
  }
`;

const AddPictureButton = styled.button`
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

const Pictures = () => {
  const dispatch = useDispatch();
  const { pictures, loading, error } = useSelector((state) => state.pictures);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [addPictureModalOpen, setAddPictureModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPictures());
  }, [dispatch]);

  const openModal = (picture) => {
    setSelectedPicture(picture);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPicture(null);
  };

  const handleAddPicture = (picture) => {
    dispatch(uploadPicture(picture));
    setAddPictureModalOpen(false);
  };

  return (
    <PicturesContainer>
      <h1>Pictures</h1>
      <AddPictureButton onClick={() => setAddPictureModalOpen(true)}>
        Add Picture
      </AddPictureButton>
      <PicturesModal
        isOpen={addPictureModalOpen}
        onClose={() => setAddPictureModalOpen(false)}
        onSave={handleAddPicture}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <PicturesGrid>
        {pictures.length > 0 ? (
          pictures.map((picture) => (
            <PictureCard key={picture.id}>
              <StyledImage src={picture.image} alt="User uploaded" />
              <DeleteButton onClick={() => openModal(picture)}>
                <DeleteIcon style={{ color: "white" }} />
              </DeleteButton>
            </PictureCard>
          ))
        ) : (
          <p>No pictures available</p>
        )}
      </PicturesGrid>
      {isModalOpen && (
        <ConfirmDeleteModal
          picture={selectedPicture}
          onClose={closeModal}
        />
      )}
    </PicturesContainer>
  );
};

export default Pictures;
