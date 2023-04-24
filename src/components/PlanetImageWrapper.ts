import styled from "styled-components";

export const ImgWrapper = styled.div`
    width: 582px;
    height: 582px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 70%;
        height: 70%;
        object-fit: cover;
    }
    @media screen and (max-width: 432px) {
        width: 382px;
        height: 382px;
    }
`;
