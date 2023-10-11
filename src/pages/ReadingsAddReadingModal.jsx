import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import styles from "./ReadingsModal.module.scss";



export default function ({ isOpen, onClose, onDataAdded }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onDataAdded({ title, author, image });
    onClose();
    //console.log({ title, author, cover });  **test added object**
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      <form onSubmit={onSubmit}>
        <div>
          <label>Book Title:</label>
          <input
            required
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            required
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Cover Link:</label>
          <input
            type="text"
            placeholder="Front Cover Link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>
        </div>

        <button className={styles['modal-button']} type="submit">Add Reading</button>
      </form>
    </Modal>
  );
}
