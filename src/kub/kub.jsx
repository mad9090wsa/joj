import React from "react";
import kit from "./kub.module.css";
import rasm from "./img/Ellipse 177.png";
import rasm1 from "./img/Ellipse 178.png";
import rasm2 from "./img/Ellipse 179.png";
import rasm3 from "./img/Ellipse 180.png";
import img1 from "./img2/Ellipse 181.png";
import img2 from "./img2/Ellipse 182.png";
import img3 from "./img2/Ellipse 183.png";
import img4 from "./img2/Ellipse 184.png";

function Kub() {
    return(
        <div className={kit.ada}>
            <div className={kit.container}>
                <div className={kit.text}>
                    <div className={kit.sub__text}>Testimonial</div>
                    <div className={kit.sub__text2}>
                        <div className={kit.text2222}>Here are many variations of passag Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words don't look even slightly believable.</div>
                        <div className={kit.subsubtext}>Cris Gayle <div>Manager</div></div>  
                        
                    </div>
                </div>
                 <div className={kit.rasma}>
                     <img src={rasm} alt="#" />
                     <img src={rasm1} alt="#" />
                     <img src={rasm2} alt="#" />
                     <img src={rasm3} alt="#" />
                    <div className={kit.rasm__sub}>
                        <img src={img1} alt="#" />
                        <img src={img2} alt="#" />
                        <img src={img3} alt="#" />
                        <img src={img4} alt="#" />

                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Kub;