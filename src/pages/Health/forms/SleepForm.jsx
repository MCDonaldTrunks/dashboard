import { Height } from '@mui/icons-material';
import React from 'react';
import styles from '../Modal.module.scss'

const SleepForm = () => {
    return (
        <div className={styles.formRender}>
            <h3>Sleep Tracking</h3>
            <form>
                <label>
                    Hours of Sleep:
                    <input type="number" placeholder="Hours slept" />
                </label>
                <br />
                <label>
                    Sleep Quality (1-10):
                    <input type="number" min="1" max="10" placeholder="Quality" />
                </label>
                <br />
                <label>
                    Any disturbances? (e.g., waking up at night):
                    <input type="text" placeholder="Disturbances" />
                </label>
                <br />
                <label>
                    How did you feel upon waking?:
                    <input type="text" placeholder="Feelings upon waking" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SleepForm;
