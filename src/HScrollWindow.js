// @flow

import React from 'react';
import { FixedSizeList as List } from 'react-window';

type Props = {
  height: number,
  itemCount: number,
  itemWidth: number,
  width: number,
  children: any,
};

const defaultProps = {};

const HScrollWindow = (props: Props) => {
  const { height, itemCount, itemWidth, width, children } = props;

  return (
    <List
      direction="horizontal"
      height={height}
      itemCount={itemCount}
      itemSize={itemWidth}
      width={width ? width : 0}
    >
      {children}
    </List>
  );
};

HScrollWindow.defaultProps = defaultProps;

export default HScrollWindow;
