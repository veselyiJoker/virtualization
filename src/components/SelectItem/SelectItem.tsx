import React from "react";
import { ISelectItem } from "../../types";
import {
  StyledSelectItemInitials,
  StyledSelectItemJob,
  StyledSelectItemName,
  StyledSelectItemTextContainer,
} from "./styles";

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
  const job = selectDataItem?.job || " ";

  // i dont have time to rename it
  return (
    <li
      id={selectDataItem.id.toString()}
      style={{
        transform: `translateY(${offsetTop}px)`,
      }}
    >
      <StyledSelectItemInitials>{initials}</StyledSelectItemInitials>
      <StyledSelectItemTextContainer>
        <StyledSelectItemName>{name}</StyledSelectItemName>
        <StyledSelectItemJob>{job}</StyledSelectItemJob>
      </StyledSelectItemTextContainer>
    </li>
  );
};
