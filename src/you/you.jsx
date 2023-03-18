import React from "react";
import uuu from "./you.module.css";
import img from "./Group 862.png";
import img1 from "./Group 33.png";
import img2 from "./Group 858.png";
import img3 from "./Group 873.png";
function You() {
    return(
        <div className={uuu.ada}>
            <div className={uuu.container}>
                <div className={uuu.rasm}>
                    <img className={uuu.pu} src={img2} alt="#" />
                    <img className={uuu.rasmimg1} src={img} alt="#" />
                    <div className={uuu.cart}>
                        <div className={uuu.div}>Weekly Metting</div>
                        <img className={uuu.imgada} src={img1} alt="#" />
                        <button>Join metting</button>
                    </div>
                </div>
                <div className={uuu.text}>
                    <div className={uuu.subtext}>Powering your comunicaiton from anywhere world.</div>
                    <div className={uuu.subtext2}>We're here to help you connect, communicate,and express your ideas so you can get more done of together. We're proud to be trusted by millions  enterprises</div>
                    <ul className={uuu.ulcart}>
                        <li><img src={img3} alt="#" /> Faster than ever</li>
                        <li><img src={img3} alt="#" /> Bosts post-metting productivity</li>
                        <li><img src={img3} alt="#" /> Enables stronger relationships</li>
                    </ul>
                    <button>Start Free trail</button>
                </div>
            </div>
        </div>
    )
}


export default You;