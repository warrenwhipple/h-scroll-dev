import React, { Component } from 'react';
import './App.css';
import HScroll from './HScroll';
import HScrollWindow from './HScrollWindow';

const cardHeight = 100;
const cardWidth = 150;

const Card = ({ index, style }) => (
  <div style={style} className="card">
    {index}
  </div>
);

const cardStyle = { width: cardWidth, height: cardHeight, flexShrink: 0 };

const cards = [...Array(20).keys()].map(key => {
  return (
    <div key={key} className="card" style={cardStyle}>
      {key}
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>vanilla</h1>
        <HScroll>{cards}</HScroll>
        <h1>showScrollbar</h1>
        <HScroll showScrollbar>{cards}</HScroll>
        <h1>scrollSnap</h1>
        <HScroll scrollSnap>{cards}</HScroll>
        <h1>window</h1>
        <HScrollWindow
          height={cardHeight}
          itemCount={1000}
          itemSize={cardWidth}
        >
          {Card}
        </HScrollWindow>
      </div>
    );
  }
}

export default App;
