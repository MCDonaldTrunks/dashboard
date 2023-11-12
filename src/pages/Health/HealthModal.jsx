import React from "react";
import { useState, useEffect } from "react";
import styles from "../css/Modal.module.scss";
import Modal from "react-modal";
import "animate.css";
import { ReactComponent as WorkOut } from "./images/work-out.svg";
import { ReactComponent as Other } from "./images/other.svg";
import { ReactComponent as Meal } from "./images/meal.svg";

export default function ({ isOpen, onClose, transfer }) {
  const [input, setInput] = useState("");
  const [isActive, setisActive] = useState({
    "Work-out": { active: false, className: "" },
    Meal: { active: false, className: "" },
    Other: { active: false, className: "" },
  });

  const onSubmit = (event) => {
    //console.log('onSubmit');
    event.preventDefault();
    //console.log(input);
    transfer(isActive);

    onClose();
  };

  //

  useEffect(() => {
    if (input !== "") {
      // 1. click on label => activate useEffect function{=> transfunc => setisActive}
      transFunc();
    }
  }, [input]);

  const transFunc = () => {
    const proObj = { ...isActive };
    for (const item in proObj) {
      if (item == input) {
        //setObj({ ...obj, [item]: { ...[item], active: true } });

        proObj[item].active = true;
      } else {
        proObj[item].active = false;
      }
      if (
        proObj[item].className == "animate__animated animate__backOutLeft" &&
        proObj[item].active == false
      ) {
        proObj[item].className = "animate__animated animate__backInLeft";
      }

      if (
        proObj[item].active &&
        (proObj[item].className == "" ||
          proObj[item].className == "animate__animated animate__backInLeft")
      ) {
        console.log("adding back out animation");

        proObj[item].className = "animate__animated animate__backOutLeft";
      }
      if (
        !proObj[item].active &&
        proObj[item].className == "animate_animated animate_backOutLeft"
      ) {
        proObj[item].className = "animate_animated animate_backInLeft";
      }
    }
    setisActive(proObj);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      <form className={styles["health-type"]} onSubmit={onSubmit}>
        <h2>Type of health input:</h2>
        <div>
          <div>
            <input type="radio" name="type" value="work-out" id="work-out" />
            <label
              onClick={() => {
                setInput("Work-out");
              }}
              for="work-out"
            >
              <WorkOut className={isActive["Work-out"].className}></WorkOut>
            </label>
          </div>
          <div>
            <input type="radio" id="meal" name="type" value="meal"></input>
            <label
              onClick={() => {
                setInput("Meal");
              }}
              for="meal"
            >
              <Meal className={isActive.Meal.className}></Meal>
            </label>
          </div>
          <div>
            <input type="radio" value="other" name="type" id="other"></input>
            <label
              onClick={() => {
                setInput("Other");
                //isActive != "other" ? setisActive("other") : undefined;
              }}
              for="other"
            >
              <Other className={isActive.Other.className}></Other>
            </label>
          </div>
        </div>

        <button className={styles["modal-button"]} type="submit">
          Add Factor
        </button>
      </form>
    </Modal>
  );
}
