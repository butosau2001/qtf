import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  overflow: hidden !important;
  width: 100vw;

  .clearGoal {
    cursor: pointer;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    font-size: 1.5rem;
  }
`;
