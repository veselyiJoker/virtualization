import React from "react";
import { ISelectItem } from "../../types";
import { StyledSelectItemInitials, StyledSelectItemName } from "./styles";

interface SelectItemProps {
  selectDataItem: ISelectItem;
  offsetTop: number;
}

export const SelectItem: React.FC<SelectItemProps> = ({
  selectDataItem,
  offsetTop,
}: SelectItemProps): JSX.Element => {
  const initials = selectDataItem?.first_name[0] + selectDataItem?.last_name[0];
  const name = selectDataItem?.first_name + " " + selectDataItem?.last_name;

  return (
    <li
      id={selectDataItem.id.toString()}
      style={{
        transform: `translateY(${offsetTop}px)`,
      }}
    >
      <StyledSelectItemInitials>{initials}</StyledSelectItemInitials>
      <StyledSelectItemName>{name}</StyledSelectItemName>
    </li>
  );
};
