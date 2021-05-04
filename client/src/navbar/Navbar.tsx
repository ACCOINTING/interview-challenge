import React from 'react';
import styles from './Navbar.module.scss';
import logo from './logo.svg';
import chevron from './chevron.svg';
import person from './person_light.png';

function Navbar() {
    return (
        <div className={styles.header}>
            <img src={logo} className={styles.logo}/>
            <ul className={styles.menu}>
                <li>Portfolio <img src={chevron}/></li>
                <li className={styles.active}>Wallets <img src={chevron}/></li>
                <li>Taxes</li>
            </ul>
            <div className={styles.topMenu}>
                <img src={person} alt="personal settings"/>
            </div>
        </div>
    );
}

export default Navbar;
