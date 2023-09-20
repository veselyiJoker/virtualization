import { useLayoutEffect, useMemo, useState } from "react";
import { DEFAULT_OVERSCAN } from "../constants";
import { IUseDataVirtualization } from "../types";

export const useDataVirtualization = (props: IUseDataVirtualization) => {
  const {
    itemHeight,
    itemsCount,
    overscan = DEFAULT_OVERSCAN,
    containerHeight,
    scrollContainerElement,
  } = props;

  const [scrollTop, setScrollTop] = useState(0);

  useLayoutEffect(() => {
    if (!scrollContainerElement) {
      return;
    }

    const handleScroll = () => {
      const scrollTop = scrollContainerElement.scrollTop;

      setScrollTop(scrollTop);
    };

    handleScroll();
    
    scrollContainerElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainerElement.removeEventListener("scroll", handleScroll);
    }
  }, [scrollContainerElement]);

  const { virtualItems, startIndex, endIndex } = useMemo(() => {
    const rangeStart = scrollTop;
    const rangeEnd = scrollTop + containerHeight;

    let startIndex = Math.floor(rangeStart / itemHeight);
    let endIndex = Math.ceil(rangeEnd / itemHeight);

    startIndex = Math.max(0, startIndex - overscan);
    endIndex = Math.min(itemsCount - 1, endIndex + overscan);

    const virtualItems = [];

    for (let index = startIndex; index <= endIndex; index++) {
      virtualItems.push({
        index,
        offsetTop: index * itemHeight,
      });
    }
    return { virtualItems, startIndex, endIndex };
  }, [scrollTop, containerHeight, itemsCount]);

  const totalHeight = itemHeight * itemsCount;

  return {
    virtualItems,
    startIndex,
    endIndex,
    totalHeight,
  };
};
