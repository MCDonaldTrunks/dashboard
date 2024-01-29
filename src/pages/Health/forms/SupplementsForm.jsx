import React from 'react';
import styles from '../Modal.module.scss'

const SupplementsForm = () => {
    return (
        <div className={styles.formRender}>
            <h3>Supplement Tracking</h3>
            <form>
                <label>
                    Supplement Name:
                    <input type="text" placeholder="Supplement" />
                </label>
                <br />
                <label>
                    Dosage:
                    <input type="text" placeholder="Dosage" />
                </label>
                <br />
                <label>
                    Frequency:
                    <input type="text" placeholder="e.g., daily, twice a week" />
                </label>
                <br />
                <label>
                    Reason for Taking:
                    <textarea placeholder="Reason for taking the supplement" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SupplementsForm;
