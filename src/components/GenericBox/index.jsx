import styled from "styled-components";

export const GenericBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};

  border-radius: ${(props) => props.borderRadius};
  overflow: ${(props) => props.overflow};

  white-space: ${(props) => props.whiteSpace};

  background-color: ${(props) => props.bgColor};
`;

<GenericBox
  width=""
  height=""
  display=""
  flexDirection=""
  justifyContent=""
  alignItems=""
  gap=""
  borderRadius=""
  overflow=""
  whiteSpace=""
  bgColor=""
></GenericBox>;
