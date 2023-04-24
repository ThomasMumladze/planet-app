import "./@style.scss";
import saturnImage from "../assets/images/planet-saturn.svg";
import saturnGeologyImage from "../assets/images/geology-saturn.png";
import saturInternalImage from "../assets/images/internal/planet-saturn-internal.svg";

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

const Saturn = () => {
    const context = useContext(appContext);

    return (
        <Section id="Saturn">
            <div className="section_body">
                <div className="planet-description">
                    <ImgWrapper>
                        <img src={saturnImage} alt=".IMG not found" />

                        {context.activeplanetReview === 17 ? (
                            <div className="internal">
                                <img
                                    src={saturInternalImage}
                                    alt=".IMG not found"
                                />
                            </div>
                        ) : null}

                        {context.activeplanetReview === 18 ? (
                            <div className="geology">
                                <img
                                    src={saturnGeologyImage}
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
                                        .saturn
                                }
                            </Title>
                        </div>
                        <div className="planet_description">
                            <SubTitle fontSize="17px" opacity=".5">
                                {
                                    context.translateState.translate.about
                                        .saturnAbout
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
                                        .saturnSource
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
                            acordionNumber={16}
                            handleClick={context.handleClick}
                            backGroundColo={"#CD5120"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .internalStructure
                            }
                            acordionNumber={17}
                            handleClick={context.handleClick}
                            backGroundColo={"#CD5120"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                        <Accordion
                            content={
                                context.translateState.translate.common
                                    .surfaceGeology
                            }
                            acordionNumber={18}
                            handleClick={context.handleClick}
                            backGroundColo={"#CD5120"}
                            border="solid 1px transparent"
                            activeAcordion={context.activeplanetReview}
                        />
                    </div>
                </div>
                <div className="planet-details">
                    {context.translateState.translate.saturnDetails.map(
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

export default Saturn;
