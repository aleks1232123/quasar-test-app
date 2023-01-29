import React from "react";
import { Button } from "../UI/Button/Button";
import styles from "./BlockHeader.module.css";

export const BlockHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.btnContainer}>
        <Button color="#CD5C5C" />
        <Button color="#F0E68C" />
      </div>
      <div className={styles.headerText}>Block</div>
    </div>
  );
};
