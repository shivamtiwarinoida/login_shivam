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
            <li  className='sidebar-big-li'><Link to="/" className='side-link'><img src={home}  />HOME</Link></li>
            <li className='sidebar-big-li'><Link to="/event" className='side-link'><img src={event} />EVENT</Link></li>
            <li className='sidebar-big-li'><Link to="/" className='side-link'><img src={team}  />TEAM</Link></li>
            <li className='sidebar-big-li'><Link to="/" className='side-link'><img src={brochure}  />BROCHURE</Link></li>
            <li className='sidebar-big-li'><Link to="/" className='side-link'><img src={sponser}  />SPONSOR</Link></li>
            <li className='sidebar-big-li'><Link to="/signin" className='side-link'><img src={tick}  />Register</Link></li>
            <li className='not-apply'></li>
            <li className='sidebar-big-li'><Link to="/login" className='side-link'><img src={login}  />Login</Link></li>
        </ul>
    )
}

export default SideBarBig;