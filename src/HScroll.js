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
  const { itemWidth, height, gap = 0, showScrollbar, scrollSnap, children } = props;

  const style = {
    height,
    position: 'relative',
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: showScrollbar ? null : 20,
    marginBottom: showScrollbar ? null : -20,
    scrollSnapType: scrollSnap ? 'x mandatory' : null,
  };

  const itemSpacing = itemWidth + gap;

  const wrappedItems = children.map((child, index) => (
    <WrappedItem
      key={index}
      offset={itemSpacing * index}
      width={itemWidth}
      scrollSnap={scrollSnap}
    >
      {child}
    </WrappedItem>
  ));

  return <div style={style}>{wrappedItems}</div>;
};

const HScroll = props => {
  const { height, itemWidth, gap, showScrollbar, scrollSnap, children } = props;

  const style = {
    height: height,
    overflowY: showScrollbar ? null : 'hidden',
  };

  return (
    <ResizeDetector handleWidth>
      {width => (
        <div style={style}>
          <HScrollInner
            itemWidth={itemWidth}
            height={height}
            gap={gap}
            showScrollbar={showScrollbar}
            scrollSnap={scrollSnap}
          >
            {children}
          </HScrollInner>
        </div>
      )}
    </ResizeDetector>
  );
};

export default HScroll;
