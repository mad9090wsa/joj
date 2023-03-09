import React,{useState} from "react";
import sss from './munu.module.css'
import './munu.css'

function Add() {
  const [nav,setNav]= useState(false)
  return (



<header>
  <div className={sss.container}>
{/* loga-img */}
<div className={sss.logaimgada}></div>

{/* loga-img */}
{/* list-loga */}
<ul className={nav ? [sss.munu, sss.aaa].join(' '):[sss.munu]}>
  <li><a href="./#1"> Home    </a></li>
  <li><a href="./#2"> Feature </a></li>
  <li><a href="./#3"> Pricing </a></li>
  <li><a href="./#4"> Solution</a></li>
  <li><a href="./#5"> Faq     </a></li>
</ul>
{/* list-loga */}

{/* click-buger */}

<div className="incon-bug"  onClick={()=> {setNav(!nav)}}>
    {nav ?  <div className={sss.click_T}><samp className={sss.span1}>X</samp></div> :   <div className={sss.click_X}><samp className={sss.span1}></samp><samp className={sss.span2}></samp></div>}
</div>
{/* click-buger */}
  </div>

</header>
  );
}

export default Add;