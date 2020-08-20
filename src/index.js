import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CurDate from './CurDate';
import Date from './Date';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { grass } from './grass';
import img from './img/grs.jpg';
import img1 from './img/grs1.jpg';
import img2 from './img/grs2.jpg';


ReactDOM.render(
    <div className='tc'>
      <Card id={grass[0].id} name={grass[0].name} speed={grass[0].speed} img={img}/>
      <Card id={grass[1].id} name={grass[1].name} speed={grass[1].speed} img={img1}/>
      <Card id={grass[2].id} name={grass[2].name} speed={grass[2].speed} img={img2}/>
      <Date/>
      </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
