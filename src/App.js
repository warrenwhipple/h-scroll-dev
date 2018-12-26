import React, { Component } from 'react';
import './App.css';
import HScroll from './HScroll';
import HScrollWindow from './HScrollWindow';
import ResizeDetector from 'react-resize-detector';

const cardHeight = 100;
const cardWidth = 150;

const Column = ({ index, style }) => (
  <div style={style}>Column {index}</div>
);

const Card = ({ index, style }) => (
  <div
    style={{
      backgroundColor: `hsl(${(index * 150) % 360}, 25%, 25%)`,
      ...style,
    }}
  >
    {index}
  </div>
);

const cards = [...Array(20).keys()].map(key => {
  return (
    <div
      key={key}
      className="card"
      style={{
        backgroundColor: `hsl(${(key * 150) % 360}, 25%, 25%)`,
      }}
    >
      {key}
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResizeDetector handleWidth>
          {width => (
            <>
              <h1>vanilla</h1>
              <HScroll width={width} height={cardHeight} itemWidth={cardWidth}>
                {cards}
              </HScroll>
              <h1>showScrollbar</h1>
              <HScroll
                width={width}
                height={cardHeight}
                itemWidth={cardWidth}
                showScrollbar
              >
                {cards}
              </HScroll>
              <h1>scrollSnap leftPeek=40 rightPeek=40</h1>
              <HScroll
                width={width}
                height={cardHeight}
                itemWidth={cardWidth}
                scrollSnap
                leftPeek={40}
                rightPeek={40}
              >
                {cards}
              </HScroll>
              <h1>gap=10 growItem=0 growGap=1</h1>
              <HScroll
                width={width}
                height={cardHeight}
                itemWidth={cardWidth}
                gap={10}
                growItem={0}
                growGap={1}
              >
                {cards}
              </HScroll>
              <h1>gap=10 leftPeek=10 rightPeek=10</h1>
              <HScroll
                width={width}
                height={cardHeight}
                itemWidth={cardWidth}
                gap={10}
                leftPeek={10}
                rightPeek={10}
              >
                {cards}
              </HScroll>
              <h1>React Window</h1>
              <HScrollWindow
                height={cardHeight}
                itemCount={1000}
                itemWidth={cardWidth}
                width={width}
              >
                {Column}
              </HScrollWindow>
            </>
          )}
        </ResizeDetector>
      </div>
    );
  }
}

export default App;
