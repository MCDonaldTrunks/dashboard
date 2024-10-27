import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPictures, uploadPicture } from "../../slices/pictureSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PicturesModal from "./PicturesModal";

// Styled Components
const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;  /* Updated padding to 0 for consistency */
  background-color: none; /* Adding background to align with the other components */
  min-height: 100vh;
  color: #e0e1dd;
`;

const PicturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const PictureCard = styled.div`
  background-color: #1b263b;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;  
`

const Pictures = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pictures, loading, error } = useSelector((state) => state.pictures);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Fetch pictures on component mount
  useEffect(() => {
    
    if (isAuthenticated) {
      dispatch(fetchPictures());
    }
  }, [dispatch, isAuthenticated]);

  const handleAddPicture = (picture) => {
    dispatch(uploadPicture(picture));
    setIsModalOpen(false);
  };

  const handleImageUrl = (picture) => {
    if (picture.image) {
        return picture.image; // Directly return the URL provided by the backend
    }
    return null;
};

  


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PicturesContainer>
      <Title>Pictures</Title>
      <AddPictureButton onClick={openModal}>Add Picture</AddPictureButton>
      <PicturesModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleAddPicture}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error fetching pictures: {error.detail || error}</p>}
      <PicturesGrid>
        {pictures && Array.isArray(pictures) && pictures.length > 0 ? (
          pictures.map((picture) => (
            <PictureCard key={picture.id}>
              {handleImageUrl(picture) ? (
                <img
                  src={handleImageUrl(picture)}
                  alt="User uploaded"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              ) : (
                <p>No image available</p>
              )}
            </PictureCard>
          ))
        ) : (
          <p>No pictures available</p>
        )}
      </PicturesGrid>

    </PicturesContainer>
  );
};

export default Pictures;
