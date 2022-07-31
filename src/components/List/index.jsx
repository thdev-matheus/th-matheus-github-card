import styled from "styled-components";

export const List = styled.ul`
  width: 450px;
  height: 600px;

  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  border-radius: 15px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
