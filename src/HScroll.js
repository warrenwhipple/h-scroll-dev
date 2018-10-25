import React from 'react';

const HScroll = props => {
  const { hideScrollbar } = props;
  const outerStyle = {
    overflowY: hideScrollbar ? 'hidden' : null,
  };
  const innerStyle = {
    display: 'flex',
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: hideScrollbar ? 20 : null,
    marginBottom: hideScrollbar ? -20 : null,
  };
  return (
    <div style={outerStyle}>
      <div style={innerStyle}>{props.children}</div>
    </div>
  );
};

export default HScroll;
