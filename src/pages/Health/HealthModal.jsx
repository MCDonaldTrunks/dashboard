import React from "react";
import { useState, useEffect } from "react";
import styles from "./Modal.module.scss";
import Modal from "react-modal";
import "animate.css";
import { ReactComponent as WorkOut } from "./images/work-out.svg";
import { ReactComponent as Other } from "./images/other.svg";
import { ReactComponent as Meal } from "./images/meal.svg";
import WorkOutForm from "./components/WorkOutForm";
import MealForm from "./components/MealForm";
import OtherForm from "./components/OtherForm";

export default function ({ isOpen, onClose, transfer }) {
  const [formActive, setFormActive] = useState(false);
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
    //transfer(isActive);

    //onClose();
    setFormActive(true);
  };

  useEffect(() => {
    if (input !== "") {
      // 1. click on label => activate useEffect function{=> transfunc => setisActive}
      transFunc();
    }
  }, [input]);

  useEffect(() => {}, [formActive]);

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

  const choiceLabel = () => {
    if (input == "") {
      return (
        <div className={`${styles["choice-text"]}`}>Choose event type</div>
      );
    } else if (input == "Meal") {
      return (
        <div className={`${styles["choice-text"]} ${styles.meal}`}>
          {`${input}`}
        </div>
      );
    } else if (input == "Other") {
      return (
        <div className={`${styles["choice-text"]} ${styles["other-option"]}`}>
          {`${input}`}
        </div>
      );
    } else if (input == "Work-out") {
      return (
        <div className={`${styles["choice-text"]} ${styles["work-out"]}`}>
          {`${input}`}
        </div>
      );
    }
  };

  const choiceForm = () => {
    //     exercises performed lifting/cardio
    //     sets and reps/speed, time and distance
    //     intensity level
    //     pain level
    //     time and date
    console.log("choiceForm ran");
    console.log(formActive);
    const ops = () => {
      if (input == "Work-out") {
        console.log("returning workout form");
        return <WorkOutForm />;
      } else if (input == "Other") {
        return <OtherForm />;
      } else if (input == "Meal") {
        return <MealForm />;
      } else if (input == "") {
        // alert("Please select one");
        return <div>none yet selected</div>;
      }
    };

    if (formActive) {
      return ops();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        onClose();
        setInput("");
        setisActive({
          "Work-out": { active: false, className: "" },
          Meal: { active: false, className: "" },
          Other: { active: false, className: "" },
        });
      }}
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      <h2 className={styles.h2}>Health Factor Input:</h2>
      <form className={styles["health-type"]} onSubmit={onSubmit}>
        {choiceLabel()}
        <div>
          <div>
            <input type="radio" name="type" value="work-out" id="work-out" />
            <label
              onClick={() => {
                setInput("Work-out");
              }}
              for="work-out"
            >
              <WorkOut
                id="work-out"
                className={isActive["Work-out"].className}
              ></WorkOut>
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
              <Meal id="meal" className={isActive.Meal.className}></Meal>
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
              <Other id="other" className={isActive.Other.className}></Other>
            </label>
          </div>
        </div>

        <button className={styles["modal-button"]} type="submit">
          Add Factor
        </button>
        {choiceForm()}
      </form>
    </Modal>
  );
}
