import React from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { useState, useEffect } from "react";
import styles from "./ReadingsModal.module.scss";
import { Start } from "@mui/icons-material";




export default function ({ isOpen, onClose, onEventAdded, dateClicked}) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
 

  const [selected, setSelected] = useState();
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('first request')
    console.log({title, start, end});
    onEventAdded({ title, start, end });

    
   
    onClose();
    console.log('second request')
    console.log({title, start, end});
  };

  //console.log(typeof new Date().getMonth === 'function');
  
  const dateAction = useEffect(() => {
    setStart(dateClicked.start);
    setEnd(dateClicked.end);
    setTitle(dateClicked.title);
  }, [dateClicked]);


  return (
    <Modal select  isOpen={isOpen} dateClicked={dateClicked}  onRequestClose={onClose} className={styles.content} overlayClassName={styles.overlay}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
            <label>Start Date</label>
            <Datetime
              value={start}
              onChange={(e) => {
                if(new Date(e).toString() === 'Invalid Date'){//console.log( new Date('i9gyihgft7ddt5865865d86diuytfiuy6tf78f').toString());
                  alert('Please enter a valid date');
                  
                }else{
                  setStart(new Date(e.toDate()))
                }
              }}
            />
        </div>
        <div>
            <label>End Date</label>
            <Datetime
              value={end}
              onChange={(e) => {
                if(new Date(e).toString() === 'Invalid Date'){
                  alert('Please enter a valid date');
                }else{
                  setEnd(new Date(e.toDate()))
                }
              }}
            />
        </div>
        <button className={styles['modal-button']} type="submit" >Add Event</button>
      </form>
    </Modal>
  );
}
