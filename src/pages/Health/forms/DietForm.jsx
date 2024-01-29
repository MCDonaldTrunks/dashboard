import React from 'react';
import styles from '../Modal.module.scss'



const DietForm = () => {

    const onSubmit = () => {
        preventDefault()
        
    };
    return (
        <div className={styles.formRender}>
            <h3>Diet Tracking</h3>
            <form onSubmit={() => onSubmit()}>
                <label>
                    Meal Type (Breakfast/Lunch/Dinner/Snack):
                    <input type="text" placeholder="Meal Type" />
                </label>
                <br />
                <label>
                    Food Items:
                    <textarea placeholder="List of foods consumed" />
                </label>
                <br />
                <label>
                    Portion Size:
                    <input type="text" placeholder="Portion size" />
                </label>
                <br />
                <label>
                    How did you feel after eating?:
                    <input type="text" placeholder="Feelings after meal" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DietForm;
