import React from 'react';

const defaultGap = 10;

const HScroll = props => {
  const { showScrollbar, scrollSnap, gap, children } = props;

  const outerStyle = {
    overflowY: showScrollbar ? null : 'hidden',
  };

  const innerStyle = {
    display: 'flex',
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: showScrollbar ? null : 20,
    marginBottom: showScrollbar ? null : -20,
    scrollSnapType: scrollSnap ? 'x mandatory' : null,
  };

  const halfGap = gap || gap === 0 ? gap : defaultGap;

  const childWrapperStyle = {
    scrollSnapAlign: scrollSnap ? 'start' : null,
    paddingLeft: halfGap,
    paddingRight: halfGap,
  };

  const wrappedChildren = children.map((child, index) => (
    <div key={index} style={childWrapperStyle}>
      {child}
    </div>
  ));

  return (
    <div style={outerStyle}>
      <div style={innerStyle}>{wrappedChildren}</div>
    </div>
  );
};

export default HScroll;
