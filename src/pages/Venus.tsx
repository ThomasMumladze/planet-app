import "./@style.scss";
import venusImage from "../assets/images/planet-venus.svg";
import venusGeologyImage from "../assets/images/geology-venus.png";
import venusInternalImage from "../assets/images/internal/planet-venus-internal.svg";

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
import { Link } from "react-router-dom";

const Venus = () => {
    const context = useContext(appContext);
    return (
        <Section id="Venus">
            <div className="section_body">
                <div className="planet-description">
                    <ImgWrapper>
                        <img src={venusImage} alt=".IMG not found" />

                        {context.activeplanetReview === 5 ? (
                            <div className="internal">
                                <img
                                    src={venusInternalImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}

                        {context.activeplanetReview === 6 ? (
                            <div className="geology">
                                <img
                                    src={venusGeologyImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}
                    </ImgWrapper>
                    <div className="about">
                        <div className="planet_name">
                            <Title fontSize="4.5em" fontWeight="700">
                                {context.translateState.translate.planets.venus}
                            </Title>
                        </div>
                        <div className="planet_description">
                            <SubTitle fontSize="17px" opacity=".5">
                                {
                                    context.translateState.translate.about
                                        .venusAbout
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
                                        .venusSource
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
                            acordionNumber={4}
                            handleClick={context.handleClick}
                            backGroundColo={"#EDA249"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .internalStructure
                            }
                            acordionNumber={5}
                            handleClick={context.handleClick}
                            backGroundColo={"#EDA249"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .surfaceGeology
                            }
                            acordionNumber={6}
                            handleClick={context.handleClick}
                            backGroundColo={"#EDA249"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                    </div>
                </div>
                <div className="planet-details">
                    {context.translateState.translate.venusDetails.map(
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

export default Venus;
