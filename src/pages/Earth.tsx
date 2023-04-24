import "./@style.scss";
import earthImage from "../assets/images/planet-earth.svg";
import earthGeologyImage from "../assets/images/geology-earth.png";
import earthInternal from "../assets/images/internal/planet-earth-internal.svg";

//------------------------- COMPONENTS
import Section from "../components/Section";
import { Card } from "../components/Card";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { ImgWrapper } from "../components/PlanetImageWrapper";
import Accordion from "../components/Accordion";

//------------------------- CONTEXT
import { useContext } from "react";
import { appContext } from "../App";

//------------------------- React ROUTER
import { Link } from "react-router-dom";

const Earth = () => {
    const context = useContext(appContext);

    return (
        <Section id="Earth">
            <div className="section_body">
                <div className="planet-description">
                    <ImgWrapper className="imageWrapper">
                        <img src={earthImage} alt=".IMG not found" />

                        {context.activeplanetReview === 8 ? (
                            <div className="internal">
                                <img src={earthInternal} alt=".IMG not found" />
                            </div>
                        ) : null}

                        {context.activeplanetReview === 9 ? (
                            <div className="geology">
                                <img
                                    src={earthGeologyImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}
                    </ImgWrapper>
                    <div className="about">
                        <div className="planet_name">
                            <Title fontSize="4.5em" fontWeight="700">
                                {context.translateState.translate.planets.earth}
                            </Title>
                        </div>
                        <div className="planet_description">
                            <SubTitle fontSize="17px" opacity=".5">
                                {
                                    context.translateState.translate.about
                                        .earthAbout
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
                                        .earthSource
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
                            acordionNumber={7}
                            handleClick={context.handleClick}
                            backGroundColo={"#6D2ED5"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .internalStructure
                            }
                            acordionNumber={8}
                            handleClick={context.handleClick}
                            backGroundColo={"#6D2ED5"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .surfaceGeology
                            }
                            acordionNumber={9}
                            handleClick={context.handleClick}
                            backGroundColo={"#6D2ED5"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                    </div>
                </div>
                <div className="planet-details">
                    {context.translateState.translate.earthDetails.map(
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

export default Earth;
