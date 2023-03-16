import React,{useState} from "react";
import click from "./click.module.css";
import img from "./Group 866.png";

function Click() {
  const [nav,setNav]= useState(true);
  const [nav2,setNav2]= useState(false);
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
          <div className={click.sub_cart}>
            <div>ddd</div>
            <div>ddd</div>
          </div>
          <div className={click.sub_cart_list}>           
             <ul className={click.list__ul}>
                <li> <img src={img} alt="#" /> 10 users one time</li>
                <li> <img src={img} alt="#" /> Secure conversation</li>
                <li> <img src={img} alt="#" /> Screen sharing</li>
                <li> <img src={img} alt="#" /> Desktop & mobile access</li>
                <li> <img src={img} alt="#" /> 40 minute limit metting</li>
                <li> <img src={img} alt="#" /><div className={click.sir}>Screen Recording</div> </li>
                <li> <img src={img} alt="#" /><div className={click.sir}>Single Sign-on</div></li>
              </ul>
              <button className={click.sir23}>Start Free trial</button>
           </div>
  </div>
  {/* ----------- */}
  <div className={click.cart}>
            <div className={click.sub_cart}>
              <div className={click.sub_t1}>Pro</div>
              <div className={click.sub_t2}>$49<div>/mo</div></div>
            </div>
            <div className={click.sub_cart_list}>
              <ul className={click.list__ul}>
                <li> <img src={img} alt="#" /> 50 users one time</li>
                <li> <img src={img} alt="#" /> Secure conversation</li>
                <li> <img src={img} alt="#" /> Screen sharing</li>
                <li> <img src={img} alt="#" /> Desktop & mobile access</li>
                <li> <img src={img} alt="#" /> 40 minute limit metting</li>
                <li> <img src={img} alt="#" /> Screen Recording</li>
                <li> <img src={img} alt="#" /><div className={click.sir}>Single Sign-on</div></li>
              </ul>
              <button className={click.sir2}>Start Free trial</button>
            </div>
            
    </div>
      {/* ----------- */}
    <div className={click.cart}>
           <div className={click.sub_cart}>
            <div>ddd</div>
            <div>ddd</div>
           </div>
           <div className={click.sub_cart_list}>
           <ul className={click.list__ul}>
                <li> <img src={img} alt="#" /> 100 users one time</li>
                <li> <img src={img} alt="#" /> Secure conversation</li>
                <li> <img src={img} alt="#" /> Screen sharing</li>
                <li> <img src={img} alt="#" /> Desktop & mobile access</li>
                <li> <img src={img} alt="#" /> 40 minute limit metting</li>
                <li> <img src={img} alt="#" /> Screen Recording</li>
                <li> <img src={img} alt="#" /> Single Sign-on</li>
              </ul>
              <button className={click.sir23}>Start Free trial</button>
           </div>
    </div>
</div>

 </div>
</header>
  );
}

export default Click;