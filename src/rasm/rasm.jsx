import React from "react";
import rams from "./rasm.module.css";
import img from "./img/Airbnb Logo.png";
import img1 from "./img/Hubspot Logo.png";
import img2 from "./img/Google Logo.png";
import img3 from "./img/Microsoft Logo.png";
import img4 from "./img/Walmart Logo.png";
import img5 from "./img/FedEx Logo.png";


let Rasm = ()=>{
   return(
    <div className={rams.ada}>
        <div className={rams.container}>
            <a href="https://www.airbnb.ru/"><img src={img} alt="#" /></a>
            <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjzgIj789v9AhWCBaIDHV0LCZIYABACGgJsZQ&ohost=www.google.com&cid=CAESbeD2bzCokUWKqEm6UXKN__3rBW7no-rbF4OphHBVCEGOnr2ZmLKzl1Rl8TFyaYG39CcYlTEYsr3JXu-aMd_huroCNsMDCCemh1zCrKNVFjsPnxowFhC62YSfXrgD4Qy2cH9eglhP0oJW6b6MJzM&sig=AOD64_1v-CVJ3CKTRMC4SLqOxVv7JNx4WA&q&adurl&ved=2ahUKEwiq34H789v9AhUJqIsKHR8FBrgQ0Qx6BAgKEAE"><img src={img1} alt="#" /> </a>
            <a href="https://www.google.ru/"><img  src={img2} alt="#" /></a>
            <a href="./#"><img src={img3} alt="#" /></a>
            <a href="./#"><img className={rams.kotrasm} src={img4} alt="#" /></a>
            <a href="./#"><img className={rams.kotrasm} src={img5} alt="#" /></a>
        </div>
    </div>
   )
};

export default Rasm;