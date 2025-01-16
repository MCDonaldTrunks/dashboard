import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Modal.module.scss";

const ViewImageModal = ({ picture, onClose }) => {
  if (!picture) return null;

  const handleBackgroundClick = (e) => {
    // Ensure that clicking the modal background closes the modal
    if (e.target.classList && e.target.classList.contains(styles.modalBackground)) {
      onClose();
    }
  };

  return (
    <div
      className={styles.modalBackground}
      onClick={handleBackgroundClick} // Handle clicks on the modal background
    >
      <div className={styles.modalContent}>
        <CloseIcon
          className={styles.closeButton}
          onClick={onClose} // Close modal directly when clicking the close button
        />
        <img
          src={picture.image_url}
          alt="Full-size view"
          className={styles.fsImage}
        />
      </div>
    </div>
  );
};

export default ViewImageModal;
