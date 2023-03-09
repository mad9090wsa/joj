import React,{useState} from "react";
import sss from './munu.module.css'
import './munu.css';
import img from "./Subtract.png";

function Add() {
  const [nav,setNav]= useState(false)
  return (



<header>
  <div className={sss.container}>


{/* loga-img */}<div className={sss.logaimgada}>
      <img className={sss.rasm__loga} src={img}/><div className={sss.loga_text}>metting</div>
</div>{/* loga-img */}



{/* list-loga */}<ul className={nav ? [sss.munu, sss.aaa].join(' '):[sss.munu]} >
  <li><a href="./#1"> Home    </a></li>
  <li><a href="./#2"> Feature </a></li>
  <li><a href="./#3"> Pricing </a></li>
  <li><a href="./#4"> Solution</a></li>
  <li><a href="./#5"> Faq     </a></li>
  <div className={sss.li_bnt}>
  <button className={sss.sub_bnt}>Downlaod</button>
  <div className={sss.sub_text}><a href="./#6">Sign in</a></div>
  </div>
</ul>{/* list-loga */}

{/* click-buger */}<div className={sss.inconbug}  onClick={()=> {setNav(!nav)} }>
    {nav ?  <div className={sss.click_T}><samp className={sss.span1}>X</samp></div> :   <div className={sss.click_X}><samp className={sss.span1}></samp><samp className={sss.span2}></samp></div>}
</div>{/* click-buger */}

{/* buntun-navbar */}<div className={sss.bun__ada}>
   <button>Downlaod</button>
</div>{/* buntun-navbar */}
 
  </div>
</header>
  );
}

export default Add;