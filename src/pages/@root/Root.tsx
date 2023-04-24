import "./root.scss";
import styled from "styled-components";

// ------------------------- COMPONENTS
import Title from "../../components/Title";
import { Nav, Ul, Li } from "../../components/Menu";

// ------------------------- REACR ROUTER
import { Link, Outlet, useLocation } from "react-router-dom";

// ------------------------- CONTEXT
import { appContext } from "../../App";
import { useContext } from "react";

const Root = () => {
    const context = useContext(appContext);

    const location = useLocation();

    return (
        <>
            <Header>
                <div className="headerTitle">
                    <Link to={"/"}>
                        <Title
                            fontSize="28px"
                            fontWeight="400"
                            lineHeight="36px"
                        >
                            the planets
                        </Title>
                    </Link>
                </div>
                <Nav>
                    <Ul>
                        {/* ---------- MERCURY ---------- */}
                        <Li>
                            <Link
                                to={"/Mercury"}
                                style={
                                    location.pathname === "/Mercury"
                                        ? { opacity: "1", color: "#419EBB" }
                                        : {}
                                }
                            >
                                {
                                    context.translateState.translate.planets
                                        .mercury
                                }
                            </Link>
                        </Li>

                        {/* ---------- VENUS ---------- */}
                        <Li>
                            <Link
                                to={"/Venus"}
                                style={
                                    location.pathname === "/Venus"
                                        ? { opacity: "1", color: "#EDA249 " }
                                        : {}
                                }
                            >
                                {context.translateState.translate.planets.venus}
                            </Link>
                        </Li>

                        {/* ---------- EARTH ---------- */}
                        <Li>
                            <Link
                                to={"/Earth"}
                                style={
                                    location.pathname === "/Earth"
                                        ? { opacity: "1", color: "#6D2ED5 " }
                                        : {}
                                }
                            >
                                {context.translateState.translate.planets.earth}
                            </Link>
                        </Li>

                        {/* ---------- MARS ---------- */}
                        <Li>
                            <Link
                                to={"/Mars"}
                                style={
                                    location.pathname === "/Mars"
                                        ? { opacity: "1", color: "#D14C32 " }
                                        : {}
                                }
                            >
                                {context.translateState.translate.planets.mars}
                            </Link>
                        </Li>

                        {/* ---------- JUPITER ---------- */}
                        <Li>
                            <Link
                                to={"/Jupiter"}
                                style={
                                    location.pathname === "/Jupiter"
                                        ? { opacity: "1", color: "#D83A34" }
                                        : {}
                                }
                            >
                                {
                                    context.translateState.translate.planets
                                        .jupiter
                                }
                            </Link>
                        </Li>

                        {/* ---------- SATURN ---------- */}
                        <Li>
                            <Link
                                to={"/Saturn"}
                                style={
                                    location.pathname === "/Saturn"
                                        ? { opacity: "1", color: "#cd5120" }
                                        : {}
                                }
                            >
                                {
                                    context.translateState.translate.planets
                                        .saturn
                                }
                            </Link>
                        </Li>

                        {/* ---------- URANUS ---------- */}
                        <Li>
                            <Link
                                to={"/Uranus"}
                                style={
                                    location.pathname === "/Uranus"
                                        ? { opacity: "1", color: "#1EC1A2" }
                                        : {}
                                }
                            >
                                {
                                    context.translateState.translate.planets
                                        .uranus
                                }
                            </Link>
                        </Li>

                        {/* ---------- NEPTUNE ---------- */}
                        <Li>
                            <Link
                                to={"/Neptune"}
                                style={
                                    location.pathname === "/Neptune"
                                        ? { opacity: "1", color: "#2D68F0" }
                                        : {}
                                }
                            >
                                {
                                    context.translateState.translate.planets
                                        .neptune
                                }
                            </Link>
                        </Li>
                    </Ul>
                </Nav>
                <div className="translate_button">
                    <button
                        onClick={() =>
                            context.dispatch({
                                type: "TRANSLATE_GEO",
                                payload: context.GEO_TRANSLATE,
                            })
                        }
                    >
                        geo
                    </button>
                    <button
                        onClick={() =>
                            context.dispatch({
                                type: "TRANSLATE_ENG",
                                payload: context.ENG_TRANSLATE,
                            })
                        }
                    >
                        eng
                    </button>
                </div>
            </Header>
            <Outlet />
        </>
    );
};

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 46px;
    border-bottom: solid 1px #ccc;
`;

export default Root;
