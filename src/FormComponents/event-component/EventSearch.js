import React from 'react';
import img from "./../assets/icon_search.png";

const EventSearch=({val,setVal}) =>{
  return (
    <div className='event-search-container'>
        <div className='event-search'>
            <img src={img} height='28px'/>
        <input className='event-input' name='search'
         placeholder='search for events' value={val} 
         onChange={(e)=>setVal(e.target.value)}/>
        </div>
    </div>
  )
}


export default EventSearch;