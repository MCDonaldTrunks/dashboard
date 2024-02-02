import React, { useState } from 'react';
import styles from '../Modal.module.scss';

const SleepForm = ({ inputSubmit }) => {
    const [sleepData, setSleepData] = useState({
        hours: '',
        quality: 'Good',
        datetime: '', // Added datetime field
        comment: '',
        type: 'Sleep',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSleepData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        inputSubmit(sleepData); // Callback to pass the data to the parent component
        
    };

    return (
        <div className={styles.formRender}>
            <h3>Sleep Tracking</h3>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label>
                    Hours of Sleep:
                    <input
                        type="number"
                        name="hours"
                        placeholder="Hours of sleep"
                        value={sleepData.hours}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Quality of Sleep:
                    <select
                        name="quality"
                        value={sleepData.quality}
                        onChange={handleInputChange}
                    >
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Poor</option>
                    </select>
                </label>
                <br />
                <label>
                    Datetime:
                    <input
                        type="datetime-local" // Use datetime-local input type
                        name="datetime"
                        value={sleepData.datetime}
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
                        value={sleepData.comment}
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

export default SleepForm;
