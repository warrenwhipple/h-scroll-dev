import React, { Component } from 'react';
import './App.css';
import { FixedSizeList as List } from 'react-window';
import ResizeDetector from 'react-resize-detector';

const Column = ({ index, style }) => <div style={style}>Column {index}</div>;

const Example = () => (
  <ResizeDetector handleWidth>
    {width => (
      <div>
        <List
          direction="horizontal"
          height={75}
          itemCount={1000}
          itemSize={100}
          width={width ? width : 0}
        >
          {Column}
        </List>
      </div>
    )}
  </ResizeDetector>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>h-scroll-test</h1>
        <Example />
      </div>
    );
  }
}

export default App;
