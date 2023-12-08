import React from "react";
import styles from "../Modal.module.scss";

function MealForm() {
  return (
    <section className={styles["meal-form"]}>
      <label for="name">
        {" "}
        Name:
        <input
          type="text"
          id="name"
          placeholder="Enter Food/Drink Name"
        ></input>
      </label>
      <label>
        {" "}
        Amount:
        <input type="text" id="amount" placeholder="Enter Amount"></input>
      </label>
      <label className={styles.price}>
        
        Approximate Price:{" "}
        <div className={styles["currency-wrapper"]}>
          <span className={styles.currencyinput}>$ </span>
          <input type="number" name="currency"></input>
        </div>
      </label>
      <label for="datetime">
        Date and time:<input id="datetime" type="datetime-local"></input>
      </label>
    </section>
  );
}

export default MealForm;

// food eaten
//         amount
//         drink/amount
//         approx price
//         time and date
