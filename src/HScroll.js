// @flow

import * as React from 'react';

const scrollbarHideLength = 20;

const WrappedItem = ({ offset, width, height, scrollSnap, children }) => {
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
  width: number,
  height: number,
  itemWidth: number,
  gap: number,
  growItem: number,
  growGap: number,
  growPeek: number,
  leftPeek: number,
  rightPeek: number,
  showScrollbar: boolean,
  scrollSnap: boolean,
  overscroll: string,
  children: React.Node[],
};

const defaultProps = {
  gap: 0,
  growItem: 1,
  growGap: 0,
  growPeek: 0,
  leftPeek: 0,
  rightPeek: 20,
  showScrollbar: false,
  scrollSnap: false,
  overscroll: 'contain',
  children: [],
};

const HScroll = (props: Props) => {
  const {
    width,
    height,
    itemWidth,
    gap,
    growItem,
    growGap,
    growPeek,
    leftPeek,
    rightPeek,
    showScrollbar,
    scrollSnap,
    overscroll,
    children,
  } = props;

  // If width is not a number return placeholder div
  // (Autosizing can init with width=NaN)
  if (isNaN(width)) return <div style={{ height }} />;

  let newItemWidth, newHeight, itemStart, itemSpacing, scrollBackWidth;
  let didFit = false;

  if (growItem !== 0 || growGap !== 0 || growPeek !== 0) {
    const fit = width - gap - leftPeek - rightPeek;
    const itemsPerPage = Math.floor(fit / (itemWidth + gap));
    if (itemsPerPage >= 1) {
      const grow = fit - itemsPerPage * (itemWidth + gap);
      const itemK = itemWidth * itemsPerPage * growItem;
      const gapK = gap * (itemsPerPage + 1) * growGap;
      const peekK = (leftPeek + rightPeek) * growPeek;
      const growK = (grow * 1.0) / (itemK + gapK + peekK);
      const newGap = gap + gap * growGap * growK;
      const newLeftPeek = leftPeek + leftPeek * growPeek * growK;
      newItemWidth = Math.floor(itemWidth + itemWidth * growItem * growK);
      newHeight = Math.floor(height + height * growItem * growK + 0.5);
      itemStart = Math.floor(newLeftPeek + newGap + 0.5);
      itemSpacing = Math.floor(newItemWidth + newGap + 0.5);
      scrollBackWidth = Math.floor(
        itemStart * 2 + itemSpacing * children.length - newGap + 0.5
      );
      didFit = true;
    }
  }

  if (!didFit) {
    itemStart = leftPeek + gap;
    itemSpacing = itemWidth + gap;
    scrollBackWidth = itemStart * 2 + itemSpacing * children.length - gap;
    newHeight = height;
  }

  const outerStyle = {
    height: newHeight,
    overflowY: showScrollbar ? null : 'hidden',
  };

  const innerStyle = {
    height: showScrollbar ? newHeight : newHeight + scrollbarHideLength,
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch',
    overscrollBehaviorX: overscroll,
    scrollSnapType: scrollSnap ? 'x proximity' : null,
    scrollPaddingLeft: scrollSnap ? itemStart : null,
  };

  const scrollBackStyle = {
    height: newHeight,
    width: scrollBackWidth,
    position: 'relative',
  };

  const wrappedItems = children.map((child, index) => (
    <WrappedItem
      key={index}
      offset={itemStart + itemSpacing * index}
      width={newItemWidth}
      height={newHeight}
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
};

HScroll.defaultProps = defaultProps;

export default HScroll;
