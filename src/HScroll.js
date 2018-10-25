import React from 'react';

const HScroll = props => {
  const { showScrollbar } = props;
  const outerStyle = {
    overflowY: showScrollbar ? null : 'hidden',
  };
  const innerStyle = {
    display: 'flex',
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: showScrollbar ? null : 20,
    marginBottom: showScrollbar ? null : -20,
  };
  return (
    <div style={outerStyle}>
      <div style={innerStyle}>{props.children}</div>
    </div>
  );
};

export default HScroll;
