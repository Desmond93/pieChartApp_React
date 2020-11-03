import React from "react";
import styles from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <div className={styles.header}>
        <NavLink className={styles.linkToPages} 
            activeClassName={styles.activeLink} 
            to="/form">Form</NavLink>
        <NavLink className={styles.linkToPages} 
            activeClassName={styles.activeLink} 
            to="diagram">Diagram</NavLink>
    </div>
} 

export default Header;