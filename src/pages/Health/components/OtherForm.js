import React from "react";
import styles from "../Modal.module.scss"

function OtherForm() {
  return (
    <section className={styles["other-form"]}>
      <label>
        
        Factor Name:{" "}
        <input type="text" placeholder="Enter Factor Name" required></input>
      </label>
      <label>
        
        Time Spent:{" "}
        <input type="text" placeholder="Enter Time Spent" required></input>
      </label>
      <label>
        
        notes:{" "}
        <textarea name="notes" placeholder="Enter Notes (Optional)" rows="5" cols="40"></textarea>
      </label>
      <label for="datetime">
        Date and time:{" "} <input id="datetime" type="datetime-local" required></input>
      </label>
    </section>
  );
}

export default OtherForm;

// activity name
// amount of time
// notes
// time and date
