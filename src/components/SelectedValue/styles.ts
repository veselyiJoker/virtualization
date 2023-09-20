import { styled } from "styled-components";

export const StyledSelectedValue = styled.p`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  background: #f0f0f0;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

export const StyledSelectValueInitials = styled.span`
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

export const StyledSelectValueTextContainer = styled.div`
  overflow: hidden;
`;

export const StyledSelectValueName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 8px 0;
`;

export const StyledSelectValueJob = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;