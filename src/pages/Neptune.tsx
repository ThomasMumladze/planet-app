import "./@style.scss";
import neptuneImage from "../assets/images/planet-neptune.svg";
import neptuneGeologyImage from "../assets/images/geology-neptune.png";
import uranusInternalImage from "../assets/images/internal/planet-neptune-internal.svg";

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

const Neptune = () => {
    const context = useContext(appContext);

    return (
        <Section id="Neptune">
            <div className="section_body">
                <div className="planet-description">
                    <ImgWrapper>
                        <img src={neptuneImage} alt=".IMG not found" />

                        {context.activeplanetReview === 22 ? (
                            <div className="internal">
                                <img
                                    src={uranusInternalImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}

                        {context.activeplanetReview === 23 ? (
                            <div className="geology">
                                <img
                                    src={neptuneGeologyImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}
                    </ImgWrapper>
                    <div className="about">
                        <div className="planet_name">
                            <Title fontSize="4.5em" fontWeight="700">
                                {
                                    context.translateState.translate.planets
                                        .neptune
                                }
                            </Title>
                        </div>
                        <div className="planet_description">
                            <SubTitle fontSize="17px" opacity=".5">
                                {
                                    context.translateState.translate.about
                                        .neptuneAbout
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
                                        .neptuneSource
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
                            acordionNumber={21}
                            handleClick={context.handleClick}
                            backGroundColo={"#2D68F0"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .internalStructure
                            }
                            acordionNumber={22}
                            handleClick={context.handleClick}
                            backGroundColo={"#2D68F0"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .surfaceGeology
                            }
                            acordionNumber={23}
                            handleClick={context.handleClick}
                            backGroundColo={"#2D68F0"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                    </div>
                </div>
                <div className="planet-details">
                    {context.translateState.translate.neptuneDetails.map(
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

export default Neptune;
