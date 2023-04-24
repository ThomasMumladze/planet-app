import styled, { css } from "styled-components";

type Props = {
    fontWeight: string;
    fontSize: string;
    lineHeight?: string;
    textColor?: string;
};

const Title = styled.h1<Props>`
    font-family: "antonio";
    font-style: normal;
    text-transform: uppercase;
    color: #ffffff;

    ${(props) => css`
        font-weight: ${props.fontWeight};
        font-size: ${props.fontSize};
        line-height: ${props.lineHeight};
        color: ${props.textColor};
    `}
`;

export default Title;
