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
                    <li>How it works</li>
                    <li>Login</li>
                    <li>Task</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
              </div>
              <div className={the.ul_loga}>
                <div>Product</div>
                <ul>
                    <li>Downlaod apps</li>
                    <li>Help center</li>
                    <li>Blog</li>
                    <li>Caeers</li>
                    <li>Partners</li>
                </ul>
              </div>
              <div className={the.ul_loga}>
                <div>More</div>
                <ul>
                    <li>Demo</li>
                    <li>Price</li>
                    <li>Business</li>
                    <li>pro</li>
                    <li>About</li>
                </ul>
              </div>
              <div className={the.ulsub}>
                <div>Contact</div>
                <ul>
                    <li>Email: admin@spaceit.com</li>
                    <li>phone: 01234 567890</li>
                    <li>Location: Amsterdam Netherlands</li>
    
                </ul>
              </div>
            </div>
           <div className={the.thesub}>
               <div className={the.hr}></div>
                  <div className={the.subtext}>Copyright By@QuomodoTheme - 2021</div>
           </div>
        </div>
    )
}
export default The;