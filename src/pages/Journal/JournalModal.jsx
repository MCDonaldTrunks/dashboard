// JournalEntryForm.js
import React, { useState } from "react";
import styles from "./Modal.module.scss";
import Modal from "react-modal";

const JournalModal = ({ isOpen, onClose, onSubmit, onCancel }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ date, title, mood, text });
    setDate("");
    setTitle("");
    setMood("");
    setText("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
      onRequestClose={onClose}
    >
      <h2>Add Journal Entry</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Mood:</label>
          <input
            type="text"
            placeholder="Enter your mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </div>

        <div className={styles.mainText}>
          <label>Main Text:</label>
          <textarea
            className={styles.textarea}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default JournalModal;
