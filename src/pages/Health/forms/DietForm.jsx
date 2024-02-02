import React, { useState } from 'react';
import styles from '../Modal.module.scss';

const DietForm = ({ inputSubmit }) => {
    const [dietData, setDietData] = useState({
        meal: '',
        calories: '',
        datetime: '', // Added datetime field
        comment: '',
        type: 'Diet',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDietData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        inputSubmit(dietData); // Callback to pass the data to the parent component
        
    };

    return (
        <div className={styles.formRender}>
            <h3>Diet Tracking</h3>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label>
                    Meal:
                    <input
                        type="text"
                        name="meal"
                        placeholder="e.g., Breakfast, Lunch, Dinner"
                        value={dietData.meal}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Calories:
                    <input
                        type="number"
                        name="calories"
                        placeholder="Calories"
                        value={dietData.calories}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Datetime:
                    <input
                        type="datetime-local" // Use datetime-local input type
                        name="datetime"
                        value={dietData.datetime}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Comment:
                    <input
                        type="text"
                        name="comment"
                        placeholder="Additional comments"
                        value={dietData.comment}
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

export default DietForm;
