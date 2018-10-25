import React from 'react';
import { FixedSizeList as List } from 'react-window';
import ResizeDetector from 'react-resize-detector';

const HScrollWindow = ({ height, itemCount, itemSize, children }) => (
  <ResizeDetector handleWidth>
    {width => (
      <div>
        <List
          direction="horizontal"
          height={height}
          itemCount={itemCount}
          itemSize={itemSize}
          width={width ? width : 0}
        >
          {children}
        </List>
      </div>
    )}
  </ResizeDetector>
);

export default HScrollWindow;
