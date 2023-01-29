import React from 'react';
import styles from './Button.module.css'

export const Button = ({ color }) => {
  return (
    <button className={styles.headerBtn} style={{backgroundColor: `${color}`}}>
    </button>
  )
}
