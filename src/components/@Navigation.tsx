import styled from "styled-components";

const Navigation = () => {
    return (
        <nav>
            <Ul>
                <Li></Li>
                <Li></Li>
                <Li></Li>
                <Li></Li>
                <Li></Li>
                <Li></Li>
                <Li></Li>
                <Li></Li>
            </Ul>
        </nav>
    );
};

const Ul = styled.ul`
    display: flex;
    align-items: center;
`;

const Li = styled.li`
    margin: 0 28px;
`;
export default Navigation;
