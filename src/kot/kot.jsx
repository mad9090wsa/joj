import React from "react";
import kot from './kot.module.css';
import img from "./Group 900.png";
import img2 from "./Group 1457.png"

function Kot() {

  return (
    <div className={kot.ada}>
       <div className={kot.container}>
          <div className={kot.text__ada2}>
            <div className={kot.text__sub__text}>The best video online meeting software.</div>   
            <div className={kot.text__sub__text_2}>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</div> 
            <button className={kot.bnt__sub}>Start for free</button>   
          </div>
           <img src={img} alt="#" className={kot.img__ada2} />
           <img src={img2} alt="#" className={kot.img__ada3} />
       </div>
    </div>
  );
}

export default Kot;