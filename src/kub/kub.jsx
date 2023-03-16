import React from "react";
import kit from "./kub.module.css";
import rasm from "./img/Ellipse 177.png";
import rasm1 from "./img/Ellipse 178.png";
import rasm2 from "./img/Ellipse 179.png";
import rasm3 from "./img/Ellipse 180.png";
import rasm4 from "./img/Ellipse 180.png";

function Kub() {
    return(
        <div className={kit.ada}>
            <div className={kit.container}>
                 <div className={kit.rasma}>
                     <img src={rasm} alt="#" />
                     <img src={rasm1} alt="#" />
                     <img src={rasm2} alt="#" />
                     <img src={rasm3} alt="#" />

                 </div>
            </div>
        </div>
    )
}
export default Kub;