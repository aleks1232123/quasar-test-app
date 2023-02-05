import React from "react";
import { BlockContent } from "../BlockContent/BlockContent";
import { BlockHeader } from "../BlockHeader/BlockHeader";
import Draggable from "react-draggable";
import styles from "./Block.module.css";

export const Block = ({ num, content, getData, state, blockClose, blockCollapse }) => {

  const onDrag = (event, data) => {
    getData(data);
  };

  console.log(state);

  const invisible = {
    visibility: "hidden",
  }

  return (
    <Draggable
      defaultPosition={{
        x: state.xRate,
        y: state.yRate,
      }}
      onDrag={onDrag}
    >
      <div style={state.isCollapsed ? invisible : null} className={styles.blockContainer}>
        <BlockHeader num={num} blockClose={blockClose} blockCollapse={blockCollapse}/>
        <BlockContent num={num} content={content} />
      </div>
    </Draggable>
  );
};
