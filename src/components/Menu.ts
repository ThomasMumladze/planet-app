import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 100%;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
`;

export const Li = styled.li`
    width: max-content;
    height: max-content;
    margin: 0 18px;
    padding: 4px 8px;
    cursor: pointer;
    list-style-type: none;

    a {
        font-family: "spartan";
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-decoration: none;
        font-size: 1.05rem;
        font-weight: 300;
        color: #fff;
        opacity: 0.5;
        transition: 0.2s ease-in-out;
    }

    &:hover {
        a {
            opacity: 1;
        }
    }
`;
