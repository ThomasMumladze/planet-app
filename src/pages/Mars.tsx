import "./@style.scss";
import marsImage from "../assets/images/planet-mars.svg";
import marsGeologyImage from "../assets/images/geology-mars.png";
import marsInternalImage from "../assets/images/internal/planet-mars-internal.svg";

//------------------------- HOOKS
import { useContext } from "react";

//------------------------- COMPONENTS
import Section from "../components/Section";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { Card } from "../components/Card";
import { ImgWrapper } from "../components/PlanetImageWrapper";
import Accordion from "../components/Accordion";

//------------------------- CONTEXT
import { appContext } from "../App";

//------------------------- Router
import { Link, useLocation } from "react-router-dom";

const Mars = () => {
    const context = useContext(appContext);

    return (
        <Section id="Mars">
            <div className="section_body">
                <div className="planet-description">
                    <ImgWrapper>
                        <img src={marsImage} alt=".IMG not found" />

                        {context.activeplanetReview === 11 ? (
                            <div className="internal">
                                <img
                                    src={marsInternalImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}

                        {context.activeplanetReview === 12 ? (
                            <div className="geology">
                                <img
                                    src={marsGeologyImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}
                    </ImgWrapper>
                    <div className="about">
                        <div className="planet_name">
                            <Title fontSize="4.5em" fontWeight="700">
                                {context.translateState.translate.planets.mars}
                            </Title>
                        </div>
                        <div className="planet_description">
                            <SubTitle fontSize="17px" opacity=".5">
                                {
                                    context.translateState.translate.about
                                        .marsAbout
                                }
                            </SubTitle>
                        </div>
                        <div className="source">
                            <p>
                                {context.translateState.translate.common.source}
                            </p>
                            <Link
                                to={
                                    context.translateState.translate.sources
                                        .marsSource
                                }
                                target="_blank"
                            >
                                wikipedia
                            </Link>
                        </div>

                        {/* -------------------- ACCORDION  -------------------- */}
                        <Accordion
                            content={
                                context.translateState.translate.common.overView
                            }
                            acordionNumber={10}
                            handleClick={context.handleClick}
                            backGroundColo={"#D14C32"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .internalStructure
                            }
                            acordionNumber={11}
                            handleClick={context.handleClick}
                            backGroundColo={"#D14C32"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .surfaceGeology
                            }
                            acordionNumber={12}
                            handleClick={context.handleClick}
                            backGroundColo={"#D14C32"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                    </div>
                </div>
                <div className="planet-details">
                    {context.translateState.translate.marsDetails.map(
                        (item: any) => (
                            <Card key={item.id}>
                                <SubTitle
                                    fontSize="17px"
                                    textTransform="uppercase"
                                    opacity=".7"
                                >
                                    {item.title}
                                </SubTitle>
                                <Title
                                    fontSize="2.3rem"
                                    fontWeight="700"
                                    lineHeight="45px"
                                >
                                    {item.describe}
                                </Title>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Mars;
