import styled, { css } from "styled-components";

type Props = {
    backgroundColor?: string;
    border?: string;
};

const Button = styled.button<Props>`
    background: transparent;
    margin: 14px 0;
    width: 350px;
    height: 48px;
    padding: 8px 18px 4px 18px;
    font-family: "spartan";
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2.57143px;
    text-align: left;
    color: #fff;
    cursor: pointer;
    border: solid 1px #ffffff80;
    transition: all 0.2s ease-in-out;

    ${(props) => css`
        background-color: ${props.backgroundColor};
        border: ${props.border};
        &:hover {
            border: solid 1px transparent;
            background-color: #313148;
        }
    `}
`;

export default Button;
