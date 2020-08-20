import React from 'react';
import './Card.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const Card =(props) =>{
    const [selectedDate, setSelectedDate] = useState(null)

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt ='grass' src={props.img}/>
            <div>
                <h1>Tuns la data de:</h1>
                <DatePicker 
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                maxDate = {new Date()}
                />
                <h1>Data tundere:</h1>
                <h2>{props.name}</h2>
                <p>{props.speed}</p>
            </div>
        </div>
    )
}

export default Card;