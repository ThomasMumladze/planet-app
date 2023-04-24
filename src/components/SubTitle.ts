import styled, { css } from "styled-components";

type Props = {
    fontSize: string;
    opacity: string;
    padding?: string;
    textTransform?: string;
    letterSpacing?: string;
};

const SubTitle = styled.p<Props>`
    font-family: "spartan";
    font-weight: 300;
    line-height: 25px;
    color: aliceblue;
    ${(props) => css`
        font-size: ${props.fontSize};
        opacity: ${props.opacity};
        padding: ${props.padding};
        text-transform: ${props.textTransform};
        letter-spacing: ${props.letterSpacing};
    `}
`;

export default SubTitle;
