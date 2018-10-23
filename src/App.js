import React, { Component } from 'react';
import './App.css';
import { FixedSizeList as List } from 'react-window';

const Column = ({ index, style }) => <div style={style}>Column {index}</div>;

const Example = () => (
  <List
    direction="horizontal"
    height={75}
    itemCount={1000}
    itemSize={100}
    width={300}
  >
    {Column}
  </List>
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
