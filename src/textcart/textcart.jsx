import React from "react";
import cart from "./textcart.module.css";
import img from "./img/Group.png";
import img2 from "./img/Group 17.png";
import img3 from "./img/Group 19.png";


function Textcart() {
    return(
        <div className={cart.ada}>
            <div className={cart.container}>
                <div className={cart.cart}>
                    <img className={cart.img1} src={img} alt="#" />
                    <div className={cart.text}>
                        <div>Affordable Pricing</div>
                        <div>A dictionary of over 200 Latin words,with a handful of model sentence. structures, to generate Lorem Ipsum</div>
                    </div>
                    <div className={cart.bntcart}>Learn more</div>
                </div>
                <div className={cart.cart}>
                    <img className={cart.img2} src={img3} alt="#" />
                    <div className={cart.text}>
                        <div>Seamless Reliability</div>
                        <div>A dictionary of over 200 Latin words,with a handful of model sentence. structures, to generate Lorem Ipsum</div>
                    </div>
                    <div className={cart.bntcart}>Learn more</div>
                </div>
                <div className={cart.cart}>
                    <img className={cart.img3} src={img2} alt="#" />
                    <div className={cart.text}>
                        <div>Secure Collaboration</div>
                        <div>A dictionary of over 200 Latin words,with a handful of model sentence. structures, to generate Lorem Ipsum</div>
                    </div>
                    <div className={cart.bntcart}>Learn more</div>
                </div>
            </div>
            <div className={cart.stop}></div>
        </div>
    )
}
export default Textcart;