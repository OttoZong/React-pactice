import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Clock(props){
  return(
    <div>
      <h1>Hello,world</h1>
      <h2>現在是 {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
