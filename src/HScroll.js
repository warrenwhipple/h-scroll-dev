import React from 'react';

const HScroll = props => {
  const { showScrollbar } = props;
  const outerStyle = {
    overflowY: showScrollbar ? 'hidden' : null,
  };
  const innerStyle = {
    display: 'flex',
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: showScrollbar ? 20 : null,
    marginBottom: showScrollbar ? -20 : null,
  };
  return (
    <div style={outerStyle}>
      <div style={innerStyle}>{props.children}</div>
    </div>
  );
};

export default HScroll;
