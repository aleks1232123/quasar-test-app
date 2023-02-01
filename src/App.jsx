import React, { useState } from "react";
import { Block } from "./components/Block/Block";
import { Button } from "./components/UI/Button/Button";
import styles from "./styles.css";

const arr = ['0', '1', '2'];

function App() {
  const [currentPositions, setCurrentPositions] = useState([]);

  const onClick = (event) => {
    let index = event.target.getAttribute('num');
    let x = {
      xRate: 0,
      yRate: 0,
    };
    // x.width = ;
    // x.height = ;
    // x.content = 
    setCurrentPositions([...currentPositions, x]);
  }

  return (
    <div className={styles.appContainer}>
      {new Array(3).fill(0).map((button, i) => (
        <Button onClick={onClick} num={i}/>
      ))}
      {currentPositions.map((comp, i) => (
        <Block key={`Block${i+1}`} num={i} setCurrentPositions={setCurrentPositions} state={currentPositions} content={`Block${arr[i]}`} />
      ))}
    </div>
  );
}

export default App;
