// JournalEntryForm.js
import React, { useState } from "react";
import styles from "./Journal.module.scss";
import Modal from "react-modal";

const JournalEntryForm = ({ isOpen, onClose, onSubmit, onCancel }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSubmit({ date, title, text });
    setDate("");
    setTitle("");
    setText("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      <h2>Add Journal Entry</h2>
      <form>
        

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

        <div className={styles["main-text"]}>
          <label>Main Text:</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default JournalEntryForm;
