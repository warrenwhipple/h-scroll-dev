import React, { Component } from 'react';
import './App.css';
import ResizeDetector from 'react-resize-detector';
import HScroll from './HScroll';
import { FixedSizeList } from 'react-window';
import withHiddenScrollbar from './withHiddenScrollbar';

const cardHeight = 100;
const cardWidth = 150;

const Card = ({ index, style }) => (
  <div
    className="card"
    style={{
      ...style,
      backgroundColor: `hsl(${(index * 150) % 360}, 25%, 25%)`,
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

const PeekWindow = withHiddenScrollbar(FixedSizeList);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResizeDetector handleWidth>
          {width => (
            <>
              <h1>window</h1>
              <PeekWindow
                direction="horizontal"
                height={cardHeight}
                itemCount={1000}
                itemSize={cardWidth}
                width={width ? width : 0}
              >
                {Card}
              </PeekWindow>
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
            </>
          )}
        </ResizeDetector>
      </div>
    );
  }
}

export default App;
