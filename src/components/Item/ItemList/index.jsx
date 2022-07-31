import styled from "styled-components";

export const Li = styled.li`
  width: 450px;
  min-height: 100px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  border: 1px solid #b1c0cf;
  border-radius: 15px;

  overflow: hidden;

  img {
    width: 80px;
  }

  h2 {
    font-size: 16pt;
  }

  p {
    font-size: 10pt;
  }

  a {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #b1c0cf;

    :hover {
      background-color: #80a0c0;

      svg {
        color: #fff;
      }
    }
  }
`;
