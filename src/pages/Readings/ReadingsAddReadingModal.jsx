import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import styles from "./Modal.module.scss";

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
      <form className={styles["reading-type"]} onSubmit={onSubmit}>
        <h2>Type of Reading:</h2>
        <div>
          <input type="radio" name="type" value="book" id="book" />
          <label for="book">
            <img alt='book'></img>
          </label>
        </div>
        <div>
          <input type="radio" id="article" name="type" value="article"></input>
          <label for="article">
          <img alt='article'></img>
          </label>
        </div>
        <div>
          <input type="radio" value="other" name="type" id="other"></input>
          <label for="other">
          <img alt='other'></img>
          </label>
        </div>

        <button className={styles["modal-button"]} type="submit">
          Add Reading
        </button>
      </form>
    </Modal>
  );
}
