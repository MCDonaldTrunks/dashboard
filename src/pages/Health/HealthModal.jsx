import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Modal.module.scss"; // Ensure this path matches your SCSS file's location

import ExerciseFormComponent from "./forms/ExerciseForm";
import DietFormComponent from "./forms/DietForm";
import SleepFormComponent from "./forms/SleepForm";
import SupplementsFormComponent from "./forms/SupplementsForm";



const ModalForm = ({ isOpen, onClose, onHealthInputAdded }) => {
  const [selectedForm, setSelectedForm] = useState("Exercise");

  const handleFormSelection = (form) => {
    setSelectedForm(form);
  };

  const renderForm = () => {
    switch (selectedForm) {
      case "Exercise":
        return <ExerciseFormComponent onExerciseSubmit={onHealthInputAdded}/>;
      case "Diet":
        return <DietFormComponent />;
      case "Sleep":
        return <SleepFormComponent />;
      case "Supplements":
        return <SupplementsFormComponent />;
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={styles.modal}
      className={styles.content}
      onRequestClose={onClose}
    >
      <div className={styles.formSelection}>
        {["Exercise", "Diet", "Sleep", "Supplements"].map((form) => (
          <button
            key={form}
            className={selectedForm === form ? styles.selected : ""}
            onClick={() => handleFormSelection(form)}
          >
            {form}
          </button>
        ))}
      </div>
      <div className={styles.formContainer}>{renderForm()}</div>
    </Modal>
  );
};

export default ModalForm;
