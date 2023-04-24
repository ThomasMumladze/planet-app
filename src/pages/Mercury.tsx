import "./@style.scss";
import mercuryImage from "../assets/images/planet-mercury.svg";
import mercuryGeologyImage from "../assets/images/geology-mercury.png";
import mercuryInternalImage from "../assets/images/internal/planet-mercury-internal.svg";

//------------------------- HOOKS
import { appContext } from "../App";
import { useContext, useEffect, useState } from "react";

//------------------------- COMPONENTS
import Section from "../components/Section";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import { Card } from "../components/Card";
import { ImgWrapper } from "../components/PlanetImageWrapper";
import Accordion from "../components/Accordion";

//------------------------- CONTEXT
import { Link } from "react-router-dom";

const Mercury = () => {
    const context = useContext(appContext);

    return (
        <Section id="Mercury">
            <div className="section_body">
                <div className="planet-description">
                    <ImgWrapper>
                        <img src={mercuryImage} alt=".IMG not found" />
                        {context.activeplanetReview === 2 ? (
                            <div className="internal">
                                <img
                                    src={mercuryInternalImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}

                        {context.activeplanetReview === 3 ? (
                            <div className="geology">
                                <img
                                    src={mercuryGeologyImage}
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
                                        .mercury
                                }
                            </Title>
                        </div>
                        <div className="planet_description">
                            <SubTitle fontSize="17px" opacity=".5">
                                {
                                    context.translateState.translate.about
                                        .mercuryAbout
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
                                        .mercurySource
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
                            acordionNumber={1}
                            handleClick={context.handleClick}
                            backGroundColo={"#419EBB"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .internalStructure
                            }
                            acordionNumber={2}
                            handleClick={context.handleClick}
                            backGroundColo={"#419EBB"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .surfaceGeology
                            }
                            acordionNumber={3}
                            handleClick={context.handleClick}
                            backGroundColo={"#419EBB"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                    </div>
                </div>
                <div className="planet-details">
                    {context.translateState.translate.mercuryDetails.map(
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

export default Mercury;
