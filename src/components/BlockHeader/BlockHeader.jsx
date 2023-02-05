import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./BlockHeader.module.css";

export const BlockHeader = ({ num, state, blockClose, blockCollapse }) => {

  return (
    <div className={styles.header}>
      <div className={styles.btnContainer}>
        <Button onClick={() => blockClose(num)} color="#CD5C5C" num={num}/>
        <Button onClick={() => blockCollapse(num)} color="#F0E68C" num={num}/>
      </div>
      <div className={styles.headerText}>Block</div>
    </div>
  );
};
