import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.scss';

Modal.setAppElement('#root');

const TodoModal = ({ isOpen, onClose, onSubmit, selectedTodo }) => {
  const [text, setText] = useState('');
  const [datetime, setDatetime] = useState('');
  const [done, setDone] = useState(false);
  const [difficulty, setDifficulty] = useState('Medium');
  const [critical, setCritical] = useState('Normal');

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text || '');
      setDatetime(selectedTodo.datetime || '');
      setDone(selectedTodo.done || false);
      setDifficulty(selectedTodo.difficulty || 'Medium');
      setCritical(selectedTodo.critical || 'Normal');
    } else {
      resetForm();
    }
  }, [selectedTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      text,
      datetime,
      done,
      difficulty,
      critical,
    });
    onClose();
  };

  const resetForm = () => {
    setText('');
    setDatetime('');
    setDone(false);
    setDifficulty('Medium');
    setCritical('Normal');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <h2>{selectedTodo ? 'Edit Todo' : 'Add Todo'}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Title:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>DateTime:</label>
          <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Status:</label>
          <select value={done ? 'Done' : 'Undone'} onChange={(e) => setDone(e.target.value === 'Done')}>
            <option value="Undone">Undone</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Difficulty:</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Critical Level:</label>
          <select value={critical} onChange={(e) => setCritical(e.target.value)}>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>{selectedTodo ? 'Update' : 'Add'} Todo</button>
      </form>
    </Modal>
  );
};

export default TodoModal;
