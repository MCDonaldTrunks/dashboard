import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import styles from "./ReadingsModal.module.scss";

export default function ({ isOpen, onClose, addPicture }) {
  const [input, setInput] = useState();
  // const [caption, setCaption] = useState('');
  // const [end, setEnd] = useState(new Date());

  const onSubmit = (event) => {
    //console.log('onSubmit');
    event.preventDefault();
    //console.log(input);
    addPicture(input);
    //console.log(event);
    //onEventAdded({ title, start, end });
    onClose();
    //console.log('...............');
    
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.content}
      overlayClassName={styles.overlay}
    >
      <form onSubmit={onSubmit}>
        <input
          type="file"
          id="myfile"
          name="myfile"
          onChange={(e) => {
            //console.log('onChange input')
            //console.log(e.target.files[0])
            setInput(URL.createObjectURL(e.target.files[0]));
            //console.log(input)
            //console.log('..............')
          }}
        ></input>
        <button className={styles["modal-button"]} type="submit">
          Add Picture
        </button>
      </form>
    </Modal>
  );
}
