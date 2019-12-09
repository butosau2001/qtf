import styled from "styled-components";

export const Container = styled.div`
  display: ${props => (props.show || props.animate ? "flex" : "none")};

  animation-name: ${props => (props.animate ? "enter" : "exit")};
  animation-duration: 1s;
  animation-timing-function: ease-in;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .subcontainer {
    border-radius: 2rem;
    border: solid 1px gray;
    position: relative;

    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    width: 18rem;

    box-shadow: 2px 2px 4px gray;

    .submit {
      margin: 0.5rem auto;
      background-color: gray;
      color: white;
    }
  }

  @keyframes enter {
    from {
      display: flex;
      position: absolute;
      top: 200vh;
      left: auto;
      right: auto;
    }
    to {
      display: flex;
      position: absolute;
      top: 0;
      left: auto;
      right: auto;
    }
  }

  @keyframes exit {
    from {
      position: absolute;
      top: 0;
      left: auto;
      right: auto;
    }
    to {
      position: absolute;
      top: -200vh;
      left: auto;
      right: auto;
    }
  }
`;
