import React from "react";
import the from "./the.module.css"
import img from "./imd/Group 2.png";
import img1 from "./imd/Group 901.png"
import img2 from "./imd/Group 902.png"

function The() {
    return(
        <div className={the.ada}>
            <div className={the.container}>
              <div className={the.loga}>
                <img src={img} alt="#" />
                <div className={the.loga_text}>We are familiar with offline our speed dating flow so we </div>
                <div className={the.loga_img}><img src={img1} alt="#" /><img src={img2} alt="#" /></div>
              </div>
              <div className={the.ul_loga}>
                <div>Resources</div>
                <ul>
                    liffff
                </ul>
              </div>
            </div>
        </div>
    )
}
export default The;