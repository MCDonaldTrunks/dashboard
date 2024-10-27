import React, { useState } from 'react';
import styles from './Modal.module.scss';

const PicturesModal = ({ isOpen, onClose, onSave }) => {
  const [picture, setPicture] = useState(null);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (picture) {
      onSave({ image: picture });
    }
  };

  const handleFileChange = (event) => {
    setPicture(event.target.files[0]);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <button onClick={onClose} style={{ float: 'right' }}>X</button>
        <h2>Add Picture</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button className={styles.subbutton} type="submit">Upload Picture</button>
        </form>
      </div>
    </div>
  );
};

export default PicturesModal;
