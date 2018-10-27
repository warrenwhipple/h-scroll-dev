import React, { Component } from 'react';
import './App.css';
import HScroll from './HScroll';
import ResizeDetector from 'react-resize-detector';

const cardHeight = 100;
const cardWidth = 150;

const cards = [...Array(20).keys()].map(key => {
  return (
    <div key={key} className="card" style={{ backgroundColor: 'red' }}>
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
        <h1>scrollSnap leftPeek=20 rightPeek=20</h1>
        <ResizeDetector handleWidth>
          {width => (
            <HScroll
              width={width}
              height={cardHeight}
              itemWidth={cardWidth}
              scrollSnap
              leftPeek={20}
              rightPeek={20}
            >
              {cards}
            </HScroll>
          )}
        </ResizeDetector>
        <h1>gap=10 rightPeek=20</h1>
        <ResizeDetector handleWidth>
          {width => (
            <HScroll
              width={width}
              height={cardHeight}
              itemWidth={cardWidth}
              gap={10}
              rightPeek={20}
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
