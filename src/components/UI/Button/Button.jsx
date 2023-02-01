import React from 'react';
import styles from './Button.module.css'

export const Button = ({ color, onClick, num }) => {


  return (
    <button onClick={(e) => onClick(e)} num={num} className={styles.headerBtn} style={{backgroundColor: `${color}`}}>
    </button>
  )
}
