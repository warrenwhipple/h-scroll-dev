// @flow

import React from 'react';
import ResizeDetector from 'react-resize-detector';

const WrappedItem = props => {
  const { offset, width, height, scrollSnap, children } = props;

  const style = {
    position: 'absolute',
    left: offset,
    width,
    height,
    scrollSnapAlign: scrollSnap ? 'start' : null,
  };

  return <div style={style}>{children}</div>;
};

const HScrollInner = props => {
  const {
    itemWidth,
    width,
    height,
    gap = 10,
    showScrollbar,
    scrollSnap,
    children,
  } = props;

  if (isNaN(width)) return null;

  const shortWidth = width - gap * 3;
  const itemsPerPage = Math.floor((shortWidth * 1.0) / (itemWidth + gap));
  const spaceLeft = shortWidth - itemsPerPage * (itemWidth + gap);
  const grownGap = (spaceLeft * 1.0) / (itemsPerPage + 3) + gap;
  const itemStart = grownGap * 2.0;
  const itemSpacing = itemWidth + grownGap;

  const style = {
    height,
    position: 'relative',
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: showScrollbar ? null : 20,
    marginBottom: showScrollbar ? null : -20,
    scrollSnapType: scrollSnap ? 'x mandatory' : null,
    scrollPaddingLeft: scrollSnap ? itemStart : null,
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

  return <div style={style}>{wrappedItems}</div>;
};

const HScrollOuter = props => {
  const { height, showScrollbar } = props;

  const style = {
    height: height,
    overflowY: showScrollbar ? null : 'hidden',
  };

  return (
    <div style={style}>
      <HScrollInner {...props} />
    </div>
  );
};

const HScroll = (props: any) => (
  <ResizeDetector handleWidth>
    {width => <HScrollOuter width={width} {...props} />}
  </ResizeDetector>
);

export default HScroll;
