import "./click.css";
import React,{useState} from "react";


function Click() {
  const [nav,setNav]= useState(false);
  const [nav2,setNav2]= useState(true);
  return (



<header>
  
<div onClick={()=> {setNav(!nav);console.log(`${nav}ii ${nav2}`);setNav2(!nav2);}}>
    click
</div>


{/* <ul className={nav ? [sss.munu, sss.aaa].join(' '):[sss.munu]} ></ul> */}





</header>
  );
}

export default Click;