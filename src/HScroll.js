// @flow

import * as React from 'react';
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

type Props = {
  itemWidth: number,
  height: number,
  gap: number,
  showScrollbar: boolean,
  scrollSnap: boolean,
  children: React.Node[],
};

const HScroll = (props: Props) => {
  const {
    itemWidth,
    height,
    gap = 10,
    showScrollbar,
    scrollSnap,
    children,
  } = props;
  return (
    <ResizeDetector handleWidth>
      {width => {
        // If width detection fails, return an empty placeholder div
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
          height,
          position: 'relative',
          overflowX: 'scroll',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: showScrollbar ? null : 20,
          marginBottom: showScrollbar ? null : -20,
          scrollSnapType: scrollSnap ? 'x mandatory' : null,
          scrollPaddingLeft: scrollSnap ? itemStart : null,
        };

        const scrollBackStyle = {
          height,
          width: scrollBackWidth,
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
      }}
    </ResizeDetector>
  );
};

export default HScroll;
