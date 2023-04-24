import styled from "styled-components";

// ------------------------- HOOKS
import { useReducer, useEffect } from "react";

//------------------------- WELCOME TEXT WITH USE REDUCER
import { reducer, initialState } from "../../services/welcomeText";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";

const BeginingPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "GOOD_MORNING", payload: "Good Morning" });
        dispatch({ type: "GOOD_AFTERNOON", payload: "Good Afternoon" });
        dispatch({ type: "GOOD_EVENING", payload: "Good Evening" });
    }, [initialState]);

    return (
        <Welcome>
            <Title fontSize="5rem" fontWeight="700" lineHeight="105px">
                {state.welocemText}
            </Title>
            <SubTitle fontSize="1.2rem" opacity="1">
                A planet is a celestial body that is in orbit around the Sun,
                has sufficient mass for its self-gravity to overcome rigid body
                forces so that it assumes a hydrostatic equilibrium shape, and
                has cleared the neighbourhood around its orbit.
            </SubTitle>
        </Welcome>
    );
};

const Welcome = styled.div`
    margin-top: 10%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
        max-width: 456px;
        font-size: 1.4rem;
        line-height: 32px;
        margin: 25px 0;
        text-transform: capitalize;
        text-align: center;
    }
`;

export default BeginingPage;
