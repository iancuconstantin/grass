import React from 'react';
import moment from 'moment';

let Date = () => {
    let now = moment().format('DD/MM/YYYY').toLocaleString();

    return (
        <div className = "f2 b">
            <p>Data : { now }</p>
        </div>
    )
}

export default Date;