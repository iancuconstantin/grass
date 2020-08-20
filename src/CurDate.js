import React, { Component } from 'react';

class CurDate extends Component {
    state = { 
        CurDate : new Date().toLocaleDateString(),
     }
    render() { 
        return ( 
            <div className = "f2 b">
                <p> Data : {this.state.CurDate} </p>
            </div>
         );
    }
}
 
export default CurDate;