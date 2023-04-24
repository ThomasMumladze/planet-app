import "./@style.scss";
import jupiterImage from "../assets/images/planet-jupiter.svg";
import jupiterGelogy from "../assets/images/geology-jupiter.png";
import jupiterInternalImage from "../assets/images/internal/planet-jupiter-internal.svg";

//------------------------- HOOKS
import { useContext } from "react";

//------------------------- COMPONENTS
import Section from "../components/Section";
import { Card } from "../components/Card";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { ImgWrapper } from "../components/PlanetImageWrapper";
import Accordion from "../components/Accordion";

//------------------------- CONTEXT
import { appContext } from "../App";

//------------------------- Router
import { Link } from "react-router-dom";

const Jupiter = () => {
    const context = useContext(appContext);

    return (
        <Section id="Jupiter">
            <div className="section_body">
                <div className="planet-description">
                    <ImgWrapper>
                        <img src={jupiterImage} alt=".IMG not found" />

                        {context.activeplanetReview === 14 ? (
                            <div className="internal">
                                <img
                                    src={jupiterInternalImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}

                        {context.activeplanetReview === 15 ? (
                            <div className="geology">
                                <img src={jupiterGelogy} alt=".IMG not found" />
                            </div>
                        ) : null}
                    </ImgWrapper>
                    <div className="about">
                        <div className="planet_name">
                            <Title fontSize="4.5em" fontWeight="700">
                                {
                                    context.translateState.translate.planets
                                        .jupiter
                                }
                            </Title>
                        </div>
                        <div className="planet_description">
                            <SubTitle fontSize="17px" opacity=".5">
                                {
                                    context.translateState.translate.about
                                        .jupiterAbout
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
                                        .jupiterSource
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
                            acordionNumber={13}
                            handleClick={context.handleClick}
                            backGroundColo={"#D83A34"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .internalStructure
                            }
                            acordionNumber={14}
                            handleClick={context.handleClick}
                            backGroundColo={"#D83A34"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .surfaceGeology
                            }
                            acordionNumber={15}
                            handleClick={context.handleClick}
                            backGroundColo={"#D83A34"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                    </div>
                </div>
                <div className="planet-details">
                    {context.translateState.translate.jupiterDetails.map(
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

export default Jupiter;
