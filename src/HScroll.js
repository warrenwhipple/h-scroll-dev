import React from 'react';
import ResizeDetector from 'react-resize-detector';

const ItemWrapper = props => {
  const { width, scrollSnap, children } = props;

  const style = {
    width,
    scrollSnapAlign: scrollSnap ? 'start' : null,
  };

  return <div style={style}>{children}</div>;
};

const HScrollInner = props => {
  const { itemWidth, gap, showScrollbar, scrollSnap, children } = props;

  const style = {
    display: 'flex',
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: showScrollbar ? null : 20,
    marginBottom: showScrollbar ? null : -20,
    scrollSnapType: scrollSnap ? 'x mandatory' : null,
  };

  const itemWrapperWidth = itemWidth + gap;

  const wrappedChildren = children.map((child, index) => (
    <ItemWrapper key={index} width={itemWrapperWidth} scrollSnap={scrollSnap}>
      {child}
    </ItemWrapper>
  ));

  return <div style={style}>{wrappedChildren}</div>;
};

const HScroll = props => {
  const { showScrollbar, scrollSnap, itemWidth, gap, children } = props;

  const style = {
    overflowY: showScrollbar ? null : 'hidden',
  };

  return (
    <ResizeDetector handleWidth>
      {width => (
        <div style={style}>
          <HScrollInner
            showScrollbar={showScrollbar}
            scrollSnap={scrollSnap}
            itemWidth={itemWidth}
            gap={gap}
          >
            {children}
          </HScrollInner>
        </div>
      )}
    </ResizeDetector>
  );
};

export default HScroll;
