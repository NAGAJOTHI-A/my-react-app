import React, { useState } from "react";
import "./app.css";

let App = () => {
  let [box1, setBox1] = useState(false);
  let [box2, setBox2] = useState(false);

  let [arrow1, setarrow1] = useState(0);
  let [arrow2, setarrow2] = useState(0);

  let handleBox1 = () => {
    let pos = 0;
    let interval = setInterval(() => {
      if (pos >= 150) {
        setBox1(true);
      } else {
        pos += 5;
        setarrow1(pos);
      }
    }, 20);
  };

  let handleBox2 = () => {
    let pos = 0;
    let interval = setInterval(() => {
      if (pos >= 150) {
        setBox2(true);
      } else {
        pos += 5;
        setarrow2(pos);
      }
    }, 20);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="left">
          <div
            className="arrow"
            style={{ left: `${arrow1}px` }}
             onClick={handleBox1}
          ></div>
        </div>
        <div
          className="circle"
          style={{ backgroundColor: box1 ? "red" : "transparent" }}
         
        ></div>
      </div>

      <div className="box">
        <div className="left">
          <div
            className="arrow"
            style={{ left: `${arrow2}px` }}
            onClick={handleBox2}
          ></div>
        </div>
        <div
          className="circle"
          style={{ backgroundColor: box2 ? "yellow" : "transparent" }}
            
        ></div>
      </div>
    </div>
  );
};

export default App;