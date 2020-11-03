import React from 'react';
import FormComponent from './FormComponent/FormComponent';
import { addNewPositionAC } from './../../appReducer';
import styles from './PageForm.module.css';

const PageForm = (props) => {

    let formComponentElements = props.positions.map(f => 
        <FormComponent key={f.id} positionName={f.positionName} positionQuantity={f.positionQuantity}
        dispatch={props.dispatch} id={f.id} />
    );

    const addNewPositionLocal = () => {
        props.dispatch(addNewPositionAC());
    }

    return <div className={styles.pageForm}>
        <button className={styles.buttonAddNewPosition} onClick={addNewPositionLocal}>Add position</button>
        {formComponentElements}
    </div>
} 

export default PageForm;