import styled, { css } from "styled-components";

type Props = {
    opacity: string;
    fontSize: string;
    fontWeight: string;
    lineHeight?: string;
    textTransform: string;
    textDecoration?: string;
    cursor?: string;
};

const Link = styled.a<Props>`
    font-family: "spartan";
    color: #fff;
    ${(props) => css`
        opacity: ${props.opacity};
        font-size: ${props.fontSize};
        font-weight: ${props.fontSize};
        line-height: ${props.lineHeight};
        text-transform: ${props.textTransform};
        text-decoration: ${props.textDecoration};
        cursor: ${props.cursor};
    `}
`;

export default Link;
