import React from "react";
import styles from "../Modal.module.scss"

function WorkOutForm() {
  return (
    <section className={styles["workout-form"]}>
      <div className={styles.separator}>
        <div className={styles.left}>
          <label for="exercise_name">
            Exercise:{" "}
            <input
              type="text"
              id="exercise_name"
              placeholder="Exercise Name"
            ></input>
          </label>

          <label for="sets">
            Sets:{" "} <input type="number" placeholder="sets" id="sets"></input>
          </label>

          <label for="Reps">
            Reps: {" "} <input type="number" placeholder="Reps" id="Reps"></input>
          </label>

        </div>
        <div className={styles.right}>

          <label for="instensity">
            Instensity Level:{" "}
            <select id="instensity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label for="pain">
            Pain Level:{" "}
            <select id="pain">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label for="datetime">
            Date and time:{" "} <input id="datetime" type="datetime-local"></input>
          </label>
        </div>

      </div>





      <label className={styles.notes} for="notes">
        notes: {" "} <textarea id="notes" rows="5" cols="40"></textarea>
      </label>
    </section>
  );
}

export default WorkOutForm;
