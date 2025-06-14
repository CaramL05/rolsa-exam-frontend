import { useState } from 'react';
import './CalendarPage.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';



export default function CalendarPage(){
    return(
        <div className='calendar-container-parent'>
            <h1>Choose Date:</h1>
            <div className='calendar-container'>
                <Calendar required/>   
            </div>
            <div className="calendar-submit-btn">
                <button><Link to="/payment">Submit</Link></button>
            </div>
        </div>
    );
}