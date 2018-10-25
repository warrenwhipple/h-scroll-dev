import React, { Component } from 'react';
import './App.css';
import HScroll from './HScroll';
import HScrollWindow from './HScrollWindow';

const cardHeight = 75
const cardWidth = 100

const Card = ({ index, style }) => (
  <div style={style} className="card">
    Card {index}
  </div>
);

const cardStyle = { width: cardWidth, height: cardHeight, flexShrink: 0 };

const cards = [...Array(20).keys()].map(key => {
  return (
    <div key={key} className="card" style={cardStyle}>
      Card {key}
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>react-window</h1>
        <Example /> */}
        <h1>vanilla</h1>
        <HScroll>{cards}</HScroll>
        <h1>hideScrollbar</h1>
        <HScroll hideScrollbar>{cards}</HScroll>
        <h1>window</h1>
        <HScrollWindow height={cardHeight} itemCount={1000} itemSize={cardWidth} >{Card}</HScrollWindow>
      </div>
    );
  }
}

export default App;
