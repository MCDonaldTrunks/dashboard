import React, { useState } from 'react';
import styles from '../Modal.module.scss';

const ExerciseForm = ({ onExerciseSubmit }) => {
    const [exerciseData, setExerciseData] = useState({
        typeOfExercise: '',
        duration: '',
        intensity: 'Low',
        feelingsAfterwards: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExerciseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onExerciseSubmit(exerciseData); // Callback to pass the data to the parent component
    };

    return (
        <div className={styles.formRender}>
            <h3>Exercise Tracking</h3>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label>
                    Type of Exercise:
                    <input
                        type="text"
                        name="typeOfExercise"
                        placeholder="e.g., Running, Yoga"
                        value={exerciseData.typeOfExercise}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Duration (in minutes):
                    <input
                        type="number"
                        name="duration"
                        placeholder="Duration"
                        value={exerciseData.duration}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Intensity:
                    <select
                        name="intensity"
                        value={exerciseData.intensity}
                        onChange={handleInputChange}
                    >
                        <option>Low</option>
                        <option>Moderate</option>
                        <option>High</option>
                    </select>
                </label>
                <br />
                <label>
                    How did you feel afterwards?:
                    <input
                        type="text"
                        name="feelingsAfterwards"
                        placeholder="Feelings after exercise"
                        value={exerciseData.feelingsAfterwards}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button className={styles.submitButton} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ExerciseForm;
