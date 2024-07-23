import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.scss";

Modal.setAppElement("#root");

function ReadingsModal({ isOpen, onClose, onBookSubmit, selectedBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (selectedBook) {
      setTitle(selectedBook.title || "");
      setAuthor(selectedBook.author || "");
      setImage(selectedBook.image || "");
    } else {
      resetForm();
    }
  }, [selectedBook]);

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setImage("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onBookSubmit({ title, author, image });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      <form onSubmit={onSubmit}>
        <h2>{selectedBook ? "Edit Reading" : "Add Reading"}</h2>
        <div className={styles.formGroup}>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button className={styles.submitButton} type="submit">
          {selectedBook ? "Update" : "Add"} Reading
        </button>
      </form>
    </Modal>
  );
}

export default ReadingsModal;
