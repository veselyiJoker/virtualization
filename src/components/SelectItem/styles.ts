import { styled } from "styled-components";

export const StyledSelectItemInitials = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 50%;
  background: #d0d0d0;
`;

export const StyledSelectItemName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;