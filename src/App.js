import React, { Component } from 'react';
import './App.css';
import HScroll from './HScroll';

const cardHeight = 100;
const cardWidth = 150;

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
        <HScroll height={cardHeight} itemWidth={cardWidth}>{cards}</HScroll>
        <h1>showScrollbar</h1>
        <HScroll height={cardHeight} itemWidth={cardWidth} showScrollbar>{cards}</HScroll>
        <h1>scrollSnap</h1>
        <HScroll height={cardHeight} itemWidth={cardWidth} scrollSnap>{cards}</HScroll>
        <h1>gap=10</h1>
        <HScroll height={cardHeight} itemWidth={cardWidth} gap={10}>{cards}</HScroll>
      </div>
    );
  }
}

export default App;
