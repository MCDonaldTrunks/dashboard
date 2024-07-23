import React, { useState } from 'react';
import styles from '../Modal.module.scss';

const SupplementForm = ({ inputSubmit }) => {
    const [supplementData, setSupplementData] = useState({
        supplementName: '',
        dosage: '',
        datetime: '', // Added datetime field
        comment: '',
        type: 'Supplements',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSupplementData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        inputSubmit(supplementData); // Callback to pass the data to the parent component
       

    };

    return (
        <div className={styles.formRender}>
            <h3>Supplement Tracking</h3>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label>
                    Supplement Name:
                    <input
                        type="text"
                        name="supplementName"
                        placeholder="e.g., Vitamin C, Fish Oil"
                        value={supplementData.supplementName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Dosage:
                    <input
                        type="text"
                        name="dosage"
                        placeholder="Dosage"
                        value={supplementData.dosage}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Datetime:
                    <input
                        type="datetime-local" // Use datetime-local input type
                        name="datetime"
                        value={supplementData.datetime}
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
                        value={supplementData.comment}
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

export default SupplementForm;
