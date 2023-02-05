import React, { useCallback, useState } from "react";
import { Block } from "./components/Block/Block";
import { Button } from "./components/UI/Button/Button";
import styles from "./styles.css";

function App() {

  const [state, setState] = useState({});

  const getData = useCallback((data) => {
    console.log(data);
  }, []);

  console.log(state);

  const onClick = (event) => {
    const blockKey = event.target.name;
    const newState = {...state};
    if (!state[blockKey]) {
      const newBlock = {
        isDraggable: true,
        isCollapsed: false,
        xRate: 0,
        yRate: 0,
        content: `Block${Number(blockKey) + 1}`,
      }
      newState[blockKey] = newBlock;
    } else {
      newState[blockKey].isCollapsed = false;
    }
    setState(newState);
  }

  const blockClose = (num) => {
    console.log('close');
    const newState = {...state};
    delete newState[num];
    setState(newState);
  }

  const blockCollapse = (num) => {
    console.log('collapse');
    const newState = {...state};
    newState[num].isCollapsed = true;
    setState(newState);
  }

  return (
    <div className={styles.appContainer}>
      {new Array(3).fill('').map((button, i) => (
        <Button
          key={`Button${i + 1}`}
          onClick={onClick}
          name={i}
        />
      ))}
      {Object.entries(state).map((comp, i) => (
        <Block
          blockClose={blockClose}
          blockCollapse={blockCollapse}
          getData={getData}
          key={`Block${Number(comp[0]) + 1}`}
          num={comp[0]}
          state={comp[1]}
          content={comp[1].content}
        />
      ))}
    </div>
  );
}

export default App;
