import React from "react";
import ikki from './ikki.module.css';
import img from "./copy (1).png";
import img2 from "./copy (2).png";

let Ikki = ()=>{
   return(
    <div className={ikki.ada}>

        <div className={ikki.container}>
            <div className={ikki.text}>Collaborate 2M+ startup and international companies ueses since 2018 </div>
            <div className={ikki.rasm}>
                <div className={ikki.sub__rasm1}>
                    <div className={ikki.rasm__text1}>15k</div>
                    <div className={ikki.rasm__5}>
                       <img src={img2} alt="#" />
                       <img src={img2} alt="#" />
                       <img src={img2} alt="#" />
                       <img src={img2} alt="#" />
                       <img src={img2} alt="#" />
                    </div>
                    <div className={ikki.rasm__text2}>Active Downloads</div>
                    
                </div>
                <div className={ikki.sub__rasm1}>
                    <div className={ikki.rasm__text1}>4.9</div>
                    <div className={ikki.rasm__5}>
                       <img src={img} alt="#" />
                       <img src={img} alt="#" />
                       <img src={img} alt="#" />
                       <img src={img} alt="#" />
                       <img src={img} alt="#" />
                    </div>
                    <div className={ikki.rasm__text2}>2,938 Rating</div>
                </div>
            </div>
        </div>
    </div>
   )
};

export default Ikki;