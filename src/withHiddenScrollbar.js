// @flow

import React from 'react';

function withHiddenScrollbar(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { height, ...remainingProps } = this.props;
      return (
        <div style={{ height }}>
          <WrappedComponent height="100%" {...remainingProps} />
        </div>
      );
    }
  };
}

export default withHiddenScrollbar;
