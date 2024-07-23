import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.scss';

Modal.setAppElement('#root');

const FinancialsModal = ({ isOpen, onClose, onSubmit, selectedEntry }) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [isExpense, setIsExpense] = useState(false);

  useEffect(() => {
    if (selectedEntry) {
      setDate(selectedEntry.date);
      setCategory(selectedEntry.category);
      setAmount(selectedEntry.amount);
      setNotes(selectedEntry.notes);
      setIsExpense(selectedEntry.type === 'expense');
    } else {
      resetForm();
    }
  }, [selectedEntry]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = { 
      date, 
      category, 
      amount, 
      notes, 
      type: isExpense ? 'expense' : 'earning' 
    };
    
    onSubmit(entry);
    onClose();
  };

  const resetForm = () => {
    setDate('');
    setCategory('');
    setAmount('');
    setNotes('');
    setIsExpense(true);
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      className={styles.Modal} 
      overlayClassName={styles.Overlay}
    >
      <h2>{selectedEntry ? 'Edit' : 'Add'} Financial Entry</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Category:</label>
          <input type="text" required value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Amount:</label>
          <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Expense:</label>
          <input type="checkbox" checked={isExpense} onChange={(e) => setIsExpense(e.target.checked)} />
        </div>
        <div className={styles.formGroup}>
          <label>Notes:</label>
          <textarea value={notes} rows={6} onChange={(e) => setNotes(e.target.value)} />
        </div>
        <button type="submit" className={styles.submitButton}>{selectedEntry ? 'Update' : 'Add'} Entry</button>
      </form>
    </Modal>
  );
};

export default FinancialsModal;
