import styled from "styled-components";

import colors from "../../styles";

export const Container = styled.div`
  height: 10vh;

  border-bottom: 1px solid black;

  background-color: ${colors.headerBackground};

  position: fixed;

  box-shadow: 0 4px rgba(0, 0, 0, 0.2);

  width: 100vw;
`;
