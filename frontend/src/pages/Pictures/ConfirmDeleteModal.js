import React from "react";
import { useDispatch } from "react-redux";
import { deletePicture } from "../../slices/pictureSlice";
import styles from "./Modal.module.scss";

const ConfirmDeleteModal = ({ picture, onClose }) => {
  const dispatch = useDispatch();

  const handleConfirm = async () => {
    await dispatch(deletePicture(picture.id));
    onClose();
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this picture?</p>
        <img src={picture.image} alt="Thumbnail" style={{ maxWidth: "100%" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button onClick={onClose} style={{ backgroundColor: "#1b263b", color: "white" }}>
            Cancel
          </button>
          <button onClick={handleConfirm} style={{ backgroundColor: "red", color: "white" }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
