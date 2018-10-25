import React, { Component } from 'react';
import './App.css';
// import { FixedSizeList as List } from 'react-window';
// import ResizeDetector from 'react-resize-detector';
import HScroll from './HScroll';

// const Card = ({ index, style }) => (
//   <div style={style} className="card">
//     Card {index}
//   </div>
// );

// const Example = () => (
//   <ResizeDetector handleWidth>
//     {width => (
//       <div>
//         <List
//           direction="horizontal"
//           height={75}
//           itemCount={1000}
//           itemSize={100}
//           width={width ? width : 0}
//         >
//           {Card}
//         </List>
//       </div>
//     )}
//   </ResizeDetector>
// );

const cardStyle = { width: 100, height: 75, flexShrink: 0 };

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
      </div>
    );
  }
}

export default App;
