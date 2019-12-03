import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;

    flex-direction: column;

    align-items: center;
`;

export const Subcontainer = styled.div`
    display: ${props => (props.show ? "flex" : "none")};

    animation-name: ${props => (props.animate ? "enter" : "exit")};
    animation-duration: 1s;
    animation-timing-function: ease-in;

    border-radius: 2rem;
    border: solid 1px gray;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0.5rem;
    padding: 1rem;
    text-align: center;

    .submit {
        margin: 0.5rem auto;
        background-color: gray;
        color: white;
    }

    @keyframes enter {
        from {
            opacity: 0;
            display: none;
        }
        to {
            opacity: 1;
            display: flex;
        }
    }

    @keyframes exit {
        from {
            opacity: 1;
            display: flex;
        }
        to {
            opacity: 0;
            display: none;
        }
    }
`;
