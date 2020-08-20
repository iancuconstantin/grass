import React from 'react';
import moment from 'moment';

const Date = () => {
    var now = moment().format('dddd/D/MM/YYYY').toLocaleString();

    return (
        <div className = "f2 b">
            <p>Date : { now }</p>
        </div>
    )
}

export default Date;