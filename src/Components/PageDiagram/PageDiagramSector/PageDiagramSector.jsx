import React from "react";
import styles from './PageDigramSector.module.css';
import { setSectorNameAC } from './../../../appReducer';

const PageDiagramSector = (props) => {

    const setSectorNameLocal = () => {
        props.dispatch(setSectorNameAC(props.sectorName ? props.sectorName : 'Unnamed position'));
    }

    const deleteSectorNameLocal = () => {
        props.dispatch(setSectorNameAC(''));
    }

    return <circle className={styles.unit} r="15.9" cx="50%" cy="50%" 
        stroke={props.sectorColor}
        strokeDasharray={props.sectorPercents+" 100"} strokeDashoffset={props.sectorShift*(-1)}
        onMouseEnter = {setSectorNameLocal} onMouseOut={deleteSectorNameLocal}>
        </circle>
} 

export default PageDiagramSector;