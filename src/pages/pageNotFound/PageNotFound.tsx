import "./pageNotFound.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <>
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>

            <div className="error__content">
                <div className="error__message message">
                    <h1 className="message__title">Page Not Found</h1>
                    <p className="message__text">
                        We're sorry, the page you were looking for isn't found
                        here. The link you followed may either be broken or no
                        longer exists. Please try again, or take a look at our.
                    </p>
                </div>
                <div className="error__nav e-nav">
                    <Link to={"/"} className="e-nav__link"></Link>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
