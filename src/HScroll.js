import React from 'react';

const HScroll = props => {
  const { showScrollbar, scrollSnap, children } = props;
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
  const childWrapperStyle = {
    scrollSnapAlign: scrollSnap ? 'start' : null,
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
