import React from 'react';
import styles from './BlockContent.module.css'

export const BlockContent = ({ content }) => {
  return (
    <div className={styles.content}>{content}</div>
  )
}
