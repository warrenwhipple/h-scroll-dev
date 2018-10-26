// @flow

import * as React from 'react';

const scrollbarHideLength = 20;

const WrappedItem = ({ offset, width, height, scrollSnap, children }) => {
  const style = {
    position: 'absolute',
    left: offset,
    width,
    height,
    scrollSnapAlign: scrollSnap ? 'start' : null,
  };

  return <div style={style}>{children}</div>;
};

type Props = {
  width: number,
  height: number,
  itemWidth: number,
  gap: number,
  showScrollbar: boolean,
  scrollSnap: boolean,
  children: React.Node[],
};

const defaultProps = {
  gap: 10,
  showScrollbar: false,
  scrollSnap: false,
  children: [],
};

const HScroll = (props: Props) => {
  const {
    width,
    height,
    itemWidth,
    gap,
    showScrollbar,
    scrollSnap,
    children,
  } = props;

  // Check broken inputs
  if (isNaN(width)) return <div style={{ height }} />;

  const shortWidth = width - gap * 3;
  const itemsPerPage = Math.floor((shortWidth * 1.0) / (itemWidth + gap));
  const spaceLeft = shortWidth - itemsPerPage * (itemWidth + gap);
  const grownGap = (spaceLeft * 1.0) / (itemsPerPage + 3) + gap;
  const itemStart = grownGap * 2.0;
  const itemSpacing = itemWidth + grownGap;
  const scrollBackWidth = itemSpacing * children.length + grownGap * 3;

  const outerStyle = {
    height,
    overflowY: showScrollbar ? null : 'hidden',
  };

  const innerStyle = {
    height: showScrollbar ? height : height + scrollbarHideLength,
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    scrollSnapType: scrollSnap ? 'x mandatory' : null,
    scrollPaddingLeft: scrollSnap ? itemStart : null,
  };

  const scrollBackStyle = {
    height,
    width: scrollBackWidth,
    position: 'relative',
  };

  const wrappedItems = children.map((child, index) => (
    <WrappedItem
      key={index}
      offset={itemStart + itemSpacing * index}
      width={itemWidth}
      height={height}
      scrollSnap={scrollSnap}
    >
      {child}
    </WrappedItem>
  ));

  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        <div style={scrollBackStyle}>{wrappedItems}</div>
      </div>
    </div>
  );
};

HScroll.defaultProps = defaultProps;

export default HScroll;
