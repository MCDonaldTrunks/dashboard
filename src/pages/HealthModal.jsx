import React from "react";
import { useState } from "react";
import styles from "./ReadingsModal.module.scss";
import Modal from "react-modal";

export default function ({ isOpen, onClose, transfer}) {
  const [input, setInput] = useState();
  // const [caption, setCaption] = useState('');
  // const [end, setEnd] = useState(new Date());



  const onSubmit = (event) => {
    //console.log('onSubmit');
    event.preventDefault();
    //console.log(input);
    transfer(input);
    //console.log(event);
    //onEventAdded({ title, start, end });
    onClose();
    //console.log('...............');
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
// type: "workout_event" /*'workout_event, diet_event, supplement_event,'*/,
//   inputTitle: "run",
//   datetime: `${new Date(Date.now)}`,
//   maxedOut: true,
//   type2: "cardio" /*'work, home_lifting, cardio'*/,
//   amount: 'reps, miles, time',
//   comment: '',