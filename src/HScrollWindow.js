// @flow

import React, { Component } from 'react';
import { FixedSizeList as List } from 'react-window';
import withHiddenScrollbar from './withHiddenScrollbar'

type Props = {
  children: Component,
  height: number | string,
  itemCount: number,
  itemSize: number,
  width: number,
};

const defaultProps = {};

const HScrollWindow = (props: Props) => {
  const { height, itemCount, itemWidth, width, children } = props;

  return (
    <div className="list-wrap">
      <List
        direction="horizontal"
        height={height}
        itemCount={itemCount}
        itemSize={itemWidth}
        width={width ? width : 0}
        className="list"
      >
        {children}
      </List>
    </div>
  );
};

HScrollWindow.defaultProps = defaultProps;

// export default HScrollWindow;
export default withHiddenScrollbar(List)