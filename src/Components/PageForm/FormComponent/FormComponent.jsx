import React from "react";
import { positionNameChangeAC, positionQuantityChangeAC, setTotalQuantityAC } from './../../../appReducer';
import styles from './FormComponent.module.css';

const FormComponent = (props) => {

    const positionNameChangeLocal = (e) => {
        props.dispatch(positionNameChangeAC(e.target.value, props.id));
    }

    const positionQuantityChangeLocal = (e) => {
        props.dispatch(positionQuantityChangeAC(e.target.value, props.id));
    }

    const setTotalQuantityLocal = () => {
        props.dispatch(setTotalQuantityAC());
    }

    return <div className={styles.formComponent}>
        <div className={styles.formComponentItem}>
            {"Position " + (props.id + +1) + " name: "} 
            <input value={props.positionName} onChange={positionNameChangeLocal}></input>
        </div>
        <div className={styles.formComponentItem}>
        {"Position " + (props.id + +1) + " quantity: "} 
            <input type="number" value={props.positionQuantity} 
                onChange={positionQuantityChangeLocal} onBlur={setTotalQuantityLocal}></input>
        </div>
    </div>
} 

export default FormComponent;