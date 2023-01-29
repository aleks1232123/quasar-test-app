import React from 'react';
import { BlockContent } from '../BlockContent/BlockContent';
import { BlockHeader } from '../BlockHeader/BlockHeader';
import styles from './Block.module.css'

export const Block = ( {content} ) => {
  return (
    <div className={styles.blockContainer}>
      <BlockHeader />
      <BlockContent content={content}/>
    </div>
  )
}
