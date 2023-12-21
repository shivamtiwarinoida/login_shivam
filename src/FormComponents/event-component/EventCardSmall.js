import React from 'react';
import card from "./../assets/card_img.png";

export default function EventCardSmall({ title = "Title", para1 = "", para2 = "", time = "6:00", day = "friday", location = "OAT", date = "2.02.24" }) {
    const msg = "The style and way of draping may vary across regions,but the panche remains  reflecting the rich cultural diversity of India.";
    const msg2 = "It holds cultural significance and is often worn during religious ceremonies, festivals, and formal occasions."
    para1 = msg;
    para2 = msg2;

    return (
        <>
            <div className='ecs'>
                <div className='ecs-contain'>
                    <img src={card} className='ecs-img' />
                    <div className='ecs-list'>
                        <ul>
                            <li>Venue</li>
                            <li className='bold'>{location}</li>
                            <li>{time}</li>
                        </ul>
                        <ul>
                            <li>Date</li>
                            <li className='bold'>{date}</li>
                            <li>{day}</li>
                        </ul>
                    </div>

                    <div className='ecs-info'>
                        <h2>{title}</h2>
                        <p>{para1}</p>    
                        <p className='ecs-p1'>{para2}</p>
                    </div>
                </div>
                <p className='ecs-p2'>{para2}</p>
                <div className='ecs-info2'>
                    <h2>{title}</h2>
                    <p>{para1}</p>
                    <p>{para2}</p>
                </div>

                <div className='ecs-list2'>
                    <ul>
                        <li>Venue</li>
                        <li className='bold'>{location}</li>
                        <li>{time}</li>
                    </ul>
                    <ul>
                        <li>Date</li>
                        <li className='bold'>{date}</li>
                        <li>{day}</li>
                    </ul>
                    <button className='btn-register'>Register</button>
                </div>
                <button className='ecs-btn'>Register</button>
            </div>

            <div className='card-spacer' />
        </>
    )
}
