import React, { useContext } from 'react'
import "../DateUI/DateUI.css"
import { IoIosArrowBack, IoIosArrowForward, IoIosShuffle } from 'react-icons/io'
import { AppContext } from '../../App'

const DateUI = () => {
    const { date, setDate } = useContext(AppContext)

    const formatDate = (dateVal = new Date()) => {
        const dateObj = new Date(dateVal);

        return dateObj.toUTCString().split(" 00:")[0];
    }

    const randomDate = (startDate, endDate) => {
        const ranDate = new Date(
            +startDate + Math.random() * (endDate - startDate)
        );

        setDate(ranDate.toISOString().slice(0, 10));
    };

    const changeDay = (numDays, dateVal = new Date()) => {
        const dateObj = new Date(Date.parse(dateVal));

        const changedDay = new Date(dateObj.setDate(dateObj.getDate() + numDays))

        setDate(changedDay.toISOString().slice(0, 10))
    }

    const beforeToday = (dateVal) => {
        const parsedDate = new Date(dateVal);
        const today = new Date().setHours(0, 0, 0, 0)

        return new Date(parsedDate.toUTCString().slice(0, -4)) < today;
    } 

    const afterStartDay = (dateVal) => {
        const parsedDate = new Date(Date.parse(dateVal));
        const startDate = new Date(1995, 5, 16, 23,59,59,99);

        
        return new Date(parsedDate.toUTCString().slice(0, -4)) > startDate;
    } 

    const TODAY = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

    return (
        <div className="bar">
            <div className="row">
                {
                    (afterStartDay(date)) && (
                        <IoIosArrowBack className="arrow icon" onClick={() => changeDay(-1, date)}/>
                    )
                }
                <span className='fullDate'>
                    {formatDate(date)}
                </span>    
                {
                    (beforeToday(date)) && (
                        <IoIosArrowForward className="arrow icon" onClick={() => changeDay(1, date)}/>
                    )
                }
                
            </div>
            <div className="row">
                <input 
                    type="date" 
                    min={'1995-06-16'}
                    max={TODAY}
                    value={date}
                    className="date-picker"
                    onChange={(e) => setDate(e.target.value)}
                />
                <IoIosShuffle className='icon shuffle' onClick={() => randomDate(new Date(1995, 5, 16), new Date())} />
            </div>
        </div>
    )
}

export default DateUI

