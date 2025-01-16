import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePicture } from "../../slices/pictureSlice";
import styles from "./Modal.module.scss";

const EditPictureModal = ({ picture, onClose }) => {
  const [description, setDescription] = useState(picture.description || "");
  const dispatch = useDispatch();

  // Update local state when the Redux store updates the picture
  useEffect(() => {
    setDescription(picture.description || "");
  }, [picture]);

  const handleSave = () => {
    const updatedData = new FormData();
    updatedData.append("description", description);

    dispatch(updatePicture({ id: picture.id, data: updatedData }))
      .then(() => {
        console.log("Picture updated successfully");
        onClose(); // Close the modal
      })
      .catch((error) => {
        console.error("Error updating picture:", error);
      });
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <h2>Edit Picture</h2>
        <form>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div style={{ marginTop: "20px" }}>
            <button type="button" onClick={onClose} style={{ marginRight: "10px" }}>
              Cancel
            </button>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPictureModal;
