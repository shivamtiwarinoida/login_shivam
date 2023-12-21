import React, { useState } from 'react';
import "./event.css";
import EventSearch from './EventSearch';
import EventButton from './EventButton';
import EventCard from './EventCard';
import SideBar from './SideBar';
import "./sidebar.css";
import SideBarBig from './SideBarBig';
import EventCardSmall from './EventCardSmall';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const EventPage = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  console.log(windowDimensions.width);
  const [search, setSearch] = useState("");
  const [show,setShow]=useState(false);

  return (
    <>
    <SideBar setVal={setShow} val={show}/>
    <SideBarBig val={show} setVal={setShow}/>
    <div className={show ? 'event-cover':'hidden'}></div>
    <div className='event-container'>
      <div className='event-spacer'></div>
      <div className='event-title'>
        EVENT
      </div>
      <EventSearch val={search} setVal={setSearch} />
      <div className='event-search-container'>
        <div className='event-button-contain'>
          <EventButton title={"Flagship"}/>
          <EventButton title={"Department Events"}/>
          <EventButton title={"Club Event"}/>
          <EventButton title={"Competitions"}/>
        </div>
      </div>
      <div className='event-search-container'>
        <EventCardSmall title={"PANACHE"}/>
        <EventCardSmall title={"DJ NIGHT"}/>
        <EventCardSmall title={"Evening Event"}/>
        <EventCardSmall title={"Dj Night"}/>
      </div>
    </div>
    </>
  );
}

export default EventPage;