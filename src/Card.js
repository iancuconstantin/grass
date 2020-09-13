import React, {Component} from 'react';
import './Card.css';
import moment from 'moment';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date : new Date()
         }
    }

    handleUserDateInput = e =>{
        this.setState({date: e.target.value});
    }


    render() { 

        console.log(this.state.date)

        let calc1 = moment(this.state.date).add(this.props.speed, 'days')
        let calc2 = moment(calc1).subtract(this.props.rain, 'days')
        
        return ( 
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <h1>{this.props.name}</h1>
            <img className='shadow-5 dib br3 pa3 ma2 bw2' alt ='grass' src={this.props.img}/>
            <div>
                <h1>Tuns la data de:</h1>
                    <input 
                    type="date"
                    onChange={this.handleUserDateInput}
                    />
                    
                <h1>Data tundere:</h1>
                <h2>{moment(calc2).format("DD-MM-YYYY")}</h2>
                <p>Speed: {this.props.speed} days</p>
            </div>
        </div>
         );
    }
}
 
export default Card;






















// const Card =(props) =>{
    
//     return(
//         <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
//             <h1>{props.name}</h1>
//             <img className='shadow-5 dib br3 pa3 ma2 bw2' alt ='grass' src={props.img}/>
//             <div>
//                 <h1>Tuns la data de:</h1>
//                 <input type="date"></input>
//                 <h1>Data tundere:</h1>
//                     <h2>{moment().add(props.speed, 'days').format("DD-MM-YYYY")}</h2>
//                 <p>Speed: {props.speed} days</p>
//             </div>
//         </div>
//     )
// }

// export default Card;