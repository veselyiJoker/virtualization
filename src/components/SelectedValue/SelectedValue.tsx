import React, { Dispatch, SetStateAction } from "react";
import { ISelectItem } from "../../types";
import {
  StyledSelectValueInitials,
  
  StyledSelectedValue,
  StyledSelectValueName,
  StyledSelectValueTextContainer,
  StyledSelectValueJob,
} from "./styles";

interface SelectValueProps {
  selectedItem: ISelectItem | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SelectedValue: React.FC<SelectValueProps> = ({
  selectedItem,
  setIsOpen,
}: SelectValueProps): JSX.Element => {
  const onSelectValueClickHandler = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };

  const initials = selectedItem
    ? selectedItem?.first_name[0] + selectedItem?.last_name[0]
    : "";
  const name = selectedItem
    ? selectedItem?.first_name + " " + selectedItem?.last_name
    : "Select Value";
  const job = selectedItem?.job || " ";

  return (
    <StyledSelectedValue onClick={onSelectValueClickHandler}>
      <StyledSelectValueInitials>{initials}</StyledSelectValueInitials>
      <StyledSelectValueTextContainer>
        <StyledSelectValueName>{name}</StyledSelectValueName>
        <StyledSelectValueJob>{job}</StyledSelectValueJob>
      </StyledSelectValueTextContainer>
    </StyledSelectedValue>
  );
};
