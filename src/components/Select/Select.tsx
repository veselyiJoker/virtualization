import React, { useCallback, useEffect, useRef, useState } from "react";
import { SelectItem } from "../SelectItem/SelectItem";
import { ISelectItem } from "../../types";
import { fetchSelectData } from "../../api";
import { CONTAINER_HEIGHT, ITEMS_PER_PAGE, ITEM_HEIGHT } from "../../constants";
import { SelectedValue } from "../SelectedValue/SelectedValue";
import {
  StyledSelect,
  StyledCollapse,
  StyledSelectList,
  StyledSelectLoading,
} from "./styles";
import { useDataVirtualization } from "../../hooks";

export const Select: React.FC = (): JSX.Element => {
  const [selectDataPage, setSelectDataPage] = useState(0);
  const [selectDataTotal, setSelectDataTotal] = useState(ITEMS_PER_PAGE);
  const [selectData, setSelectData] = useState<ISelectItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ISelectItem>();

  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // Virtualization
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { virtualItems, totalHeight } = useDataVirtualization({
    itemsCount: selectData.length,
    itemHeight: ITEM_HEIGHT,
    containerHeight: CONTAINER_HEIGHT,
    scrollContainerElement: scrollContainerRef.current,
  });

  // Event delegation
  const onSelectClickHandler = (e: React.MouseEvent<HTMLDivElement>): void => {
    const newSelectedItemId = (
      (e.target as Element)?.closest("[id]") as HTMLElement
    )?.id;

    if (newSelectedItemId) {
      const newSelectedItem = selectData.find((selectDataItem: ISelectItem) => {
        if (selectDataItem.id === +newSelectedItemId) {
          return selectDataItem;
        }
      });

      setSelectedItem(newSelectedItem);
      setIsOpen(false);
    }
  };

  const onSelectScrollHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    const scrollTop = e.currentTarget.scrollTop;
    const offsetHeight = e.currentTarget.offsetHeight;

    if (scrollHeight - (scrollTop + offsetHeight) < 100) {
      setIsFetching(true);
    }
  };

  // Dynamic pagination
  useEffect(() => {
    if (
      isFetching &&
      (selectDataPage + 1) * ITEMS_PER_PAGE <= selectDataTotal
    ) {
      const fetchData = async () => {
        try {
          const res = await fetchSelectData(selectDataPage + 1, ITEMS_PER_PAGE);

          const { data, meta } = res;

          setSelectData((prevState: ISelectItem[]) => {
            return [...prevState, ...data];
          });
  
          if (!selectedItem) {
            setSelectedItem(data[0]);
          }
          setSelectDataPage((prevState: number) => prevState + 1);
          setSelectDataTotal(meta.total);
          setIsFetching(false);

        } catch(err) {
          // cheap but cheerful
          alert(err);
        }
  
      };

      fetchData();
    }
  }, [isFetching]);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <StyledSelect>
      <SelectedValue selectedItem={selectedItem} setIsOpen={setIsOpen} />
      <StyledCollapse
        ref={scrollContainerRef}
        onScroll={onSelectScrollHandler}
        onClick={onSelectClickHandler}
        $isOpen={isOpen}
      >
        <StyledSelectList style={{ height: totalHeight }}>
          {virtualItems.map((virtualItem) => {
            const item = selectData[virtualItem.index]!;

            return (
              <SelectItem
                key={item.id}
                selectDataItem={item}
                offsetTop={virtualItem.offsetTop}
              />
            );
          })}
        </StyledSelectList>
        <StyledSelectLoading $isFetching={isFetching}>
          Loading...
        </StyledSelectLoading>
      </StyledCollapse>
    </StyledSelect>
  );
};
