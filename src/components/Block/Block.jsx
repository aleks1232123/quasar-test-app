import React from "react";
import { BlockContent } from "../BlockContent/BlockContent";
import { BlockHeader } from "../BlockHeader/BlockHeader";
import Draggable from "react-draggable";
import styles from "./Block.module.css";

export const Block = ({ num, content, state, setCurrentPositions }) => {
  const onDrag = (event, data) => {
    console.log(state[num]);
    const newArr = [...state];
    newArr[num] = {
      xRate: data.x,
      yRate: data.y,
      width: data.node.clientWidth,
      height: data.node.clientHeight,
    };
    setCurrentPositions(newArr);
  };

  return (
    <Draggable
      position={{
        x: state[num]?.xRate,
        y: state[num]?.yRate,
      }}
      onDrag={onDrag}
    >
      <div className={styles.blockContainer}>
        <BlockHeader />
        <BlockContent content={content} />
      </div>
    </Draggable>
  );
};
