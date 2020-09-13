import React, {Component} from 'react';
import Card from './Card';
import './Card.css';
import {grass} from './grass';
import img from './img/grs.jpg';
import Date from './Date';

class App extends Component {
    
    constructor(){
        super()
        this.state = {
            DatePicked : '',
            vremea : [],
            rain: null,
        }
    }

    async componentDidMount(){
        
        //GET API DATA & UPDATE THE STATE
        let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=44.439663&lon=26.096306&&exclude=hourly,minutely&appid=b8031848fb08cb89b7251574e739c1bc&units=metric';
        let response = await fetch(url);
        let data = await response.json();

        this.setState({ 
            vremea : data.daily,
        })
    
        //FILTER RAINY DAYS & UPDATE THE STATE
        let days = this.state.vremea;
        let rainy= days.filter(zile=>zile.weather[0].main === "Clouds");
        let length = rainy.length;
        
        this.setState({
            rain: length
        })
        console.log(this.state.rain)
    }

    render() { 
        return ( 
            <div>
                <Card id={grass[0].id} name={grass[0].name} speed={grass[0].speed} rain= {this.state.rain} img={img}/>
                <Card id={grass[1].id} name={grass[1].name} speed={grass[1].speed} rain= {this.state.rain} img={img}/>
                <Card id={grass[2].id} name={grass[2].name} speed={grass[2].speed} rain= {this.state.rain} img={img}/>
                <Date/>
            </div>
         );
    }
}

export default App;