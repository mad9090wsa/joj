import React from "react";
import kot from './kot.module.css';
import img from "./Group 900.png";


function Kot() {

  return (
    <div className={kot.ada}>
       <div className={kot.container}>
          <div className={kot.text__ada2}>
            ddddddddddddddddddddddddddddddddddddddddddddd          
          </div>
           <img src={img} alt="#" className={kot.img__ada2} />
       </div>
    </div>
  );
}

export default Kot;