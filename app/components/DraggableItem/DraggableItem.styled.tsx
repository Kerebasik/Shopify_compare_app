import styled from "@emotion/styled";

export const DragList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DragItem = styled.li`
  border-radius: 4px;
  :hover {
    background-color: #f5f5f5;
  }
`;

export const DragBox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
`;

export const DragCheckboxContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 5px;
`;
