import React, { Component } from 'react';
import './App.css';
import HScroll from './HScroll';
import ResizeDetector from 'react-resize-detector';

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
        <ResizeDetector handleWidth>
          {width => (
            <HScroll width={width} height={cardHeight} itemWidth={cardWidth}>
              {cards}
            </HScroll>
          )}
        </ResizeDetector>
        <h1>showScrollbar</h1>
        <ResizeDetector handleWidth>
          {width => (
            <HScroll
              width={width}
              height={cardHeight}
              itemWidth={cardWidth}
              showScrollbar
            >
              {cards}
            </HScroll>
          )}
        </ResizeDetector>
        <h1>scrollSnap</h1>
        <ResizeDetector handleWidth>
          {width => (
            <HScroll
              width={width}
              height={cardHeight}
              itemWidth={cardWidth}
              scrollSnap
            >
              {cards}
            </HScroll>
          )}
        </ResizeDetector>
        <h1>gap=0</h1>
        <ResizeDetector handleWidth>
          {width => (
            <HScroll
              width={width}
              height={cardHeight}
              itemWidth={cardWidth}
              gap={0}
            >
              {cards}
            </HScroll>
          )}
        </ResizeDetector>
      </div>
    );
  }
}

export default App;
