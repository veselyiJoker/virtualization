import { styled } from "styled-components";
import { ITEM_HEIGHT } from "../../constants";


export const StyledSelect = styled.div`
  width: 30rem;
  margin: auto;
`;

export const StyledCollapse = styled.div<{$isOpen: boolean}>`
  position: relative;
  display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
  height: 30rem;
  border-radius: 0.8rem;
  background: #f0f0f0;
  overflow: auto;
`;

// Очень удивлён что кто-то полез в стили :))
// Т.К. styledComponents плохо работает с виртуализацией 
// стили закинул через родителя ибо уже поздний вечер и нет времени 
// ковыряться в стилях ибо задание не про стили

export const StyledSelectList = styled.ul<{$totalHeight: number}>`
  height:  ${({ $totalHeight }) => $totalHeight}px;
  padding: 0;
  margin: 0;
  overscroll-behavior: auto;

  li {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    height: ${ITEM_HEIGHT}px;
    padding: 10px 15px;
    list-style: none;
    cursor: pointer;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

export const StyledSelectLoading = styled.div<{$isFetching: boolean}>`
  display: ${({ $isFetching }) => $isFetching ? 'block' : 'none'};
  padding: 10px 0;
  text-align: center;
`;