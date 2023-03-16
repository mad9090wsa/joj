import React,{useState} from "react";
import click from "./click.module.css";
import img from "./Group 866.png";

function Click() {
  const [nav,setNav]= useState(false);
  const [nav2,setNav2]= useState(true);
  let a1 = ()=>{
    setNav(!nav);
    setNav2(!nav2);
  };
  let a2 = ()=>{
    setNav(!nav);
    setNav2(!nav2);
  };
  return (
<header className={click.ada}>
  <div className={click.container}>
<div className={click.ada__text}>
  <div className={click.subtext1}>Flexible pricing  plan</div>
  <div className={click.subtext2}>We are familiar with offline speed dating flow so we designed out online
platform considering all the requirements</div>
</div>


 <div className={click.ku}>
   <div  onClick={a1} className={nav ? [click.d1, click.bac].join(' '):[click.d1]}> Annually</div>
   <div  onClick={a2} className={nav2 ? [click.d2, click.bac].join(' '):[click.d2]}>Monthly</div>
   
 </div>

<div className={click.cart_ada}>
  <div className={click.cart}>
          <div className={click.sub_cart}>d</div>
          <div className={click.sub_cart_list}>s</div>
  </div>
  {/* ----------- */}
  <div className={click.cart}>
            <div className={click.sub_cart}>a</div>
            <div className={click.sub_cart_list}>
              <ul className={click.list__ul}>
                <li> <img src={img} alt="#" /> ddddddd</li>
                <li> <img src={img} alt="#" /> ddddddd</li>
                <li> <img src={img} alt="#" /> ddddddd</li>
                <li> <img src={img} alt="#" /> ddddddd</li>
                <li> <img src={img} alt="#" /> ddddddd</li>
                <li> <img src={img} alt="#" /> ddddddd</li>
                <li> <img src={img} alt="#" /> ddddddd</li>
              </ul>
            </div>
            
    </div>
      {/* ----------- */}
    <div className={click.cart}>
           <div className={click.sub_cart}>s</div>
           <div className={click.sub_cart_list}>d</div>
    </div>
</div>

 </div>
</header>
  );
}

export default Click;