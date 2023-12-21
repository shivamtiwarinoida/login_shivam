import React from 'react';
import brochure from "./../assets/icon_brochure.png";
import event from "./../assets/icon_event.png";
import home from "./../assets/icon_home.png";
import login from "./../assets/icon_login.png";
import tick from "./../assets/icon_tick.png";
import team from "./../assets/icon_team.png";
import sponser from "./../assets/icon_sponsor.png";
import "./sidebar.css";


export default function SideBar({val,setVal}) {
    const handle=()=>{
        setVal(!val);
    }

  return (
    <ul className={val?'hidden':'sidebar'}>
        <li onClick={handle}><img src={home} className='sidebar-li'/></li>
        <li onClick={handle}><img src={event} className='sidebar-li' /></li>
        <li onClick={handle}><img src={team} className='sidebar-li' /></li>
        <li onClick={handle}><img src={brochure} className='sidebar-li' /></li>
        <li onClick={handle}><img src={sponser} className='sidebar-li' /></li>
        <li onClick={handle}><img src={tick} className='sidebar-li' /></li>
        <li className='not-apply'></li>
        <li onClick={handle}><img src={login} className='sidebar-li' /></li>
    </ul>
  )
}
