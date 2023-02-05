import React from 'react';
import styles from './Button.module.css'

export const Button = ({ onClick, name, color }) => {

  return (
    <button onClick={onClick} name={name} className={styles.headerBtn} style={{backgroundColor: `${color}`}}>
    </button>
  )
}
