import React from 'react';
import brochure from "./../assets/icon_brochure.png";
import event from "./../assets/icon_event.png";
import home from "./../assets/icon_home.png";
import login from "./../assets/icon_login.png";
import tick from "./../assets/icon_tick.png";
import team from "./../assets/icon_team.png";
import sponser from "./../assets/icon_sponsor.png";
import cross from "./../assets/icon_cross.png";
import "./sidebar.css";
import { Link } from 'react-router-dom';

const SideBarBig = ({ val, setVal }) => {
    const handle = () => {
        setVal(!val);
    }

    return (
        <ul className={val ? 'sidebar-big' : 'hidden'}>
            <li className='not-apply-big'><span></span><img src={cross} onClick={handle}/></li>
            <li  className='sidebar-big-li'><img src={home}  /><Link to="/" className='side-link'>HOME</Link></li>
            <li className='sidebar-big-li'><img src={event} /><Link to="/event" className='side-link'>EVENT</Link></li>
            <li className='sidebar-big-li'><img src={team}  /><Link to="/" className='side-link'>TEAM</Link></li>
            <li className='sidebar-big-li'><img src={brochure}  /><Link to="/" className='side-link'>BROCHURE</Link></li>
            <li className='sidebar-big-li'><img src={sponser}  /><Link to="/" className='side-link'>SPONSOR</Link></li>
            <li className='sidebar-big-li'><img src={tick}  /><Link to="/signin" className='side-link'>Register</Link></li>
            <li className='not-apply'></li>
            <li className='sidebar-big-li'><img src={login}  /><Link to="/login" className='side-link'>Login</Link></li>
        </ul>
    )
}

export default SideBarBig;