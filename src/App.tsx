import "./App.css";

// =============== HOOKS =============== //
import { createContext, useReducer, useState } from "react";

// =============== PAGES =============== //
import Root from "./pages/@root/Root"; // ----- ROOT PAGE
import Mercury from "./pages/Mercury"; // ----- Mercury Page
import Venus from "./pages/Venus"; // ----- Venus Page
import Earth from "./pages/Earth"; // ----- Earth Page
import Mars from "./pages/Mars"; // ----- Mars Page
import Jupiter from "./pages/Jupiter"; // ----- Jupiter Page
import Saturn from "./pages/Saturn"; // ----- Saturn Page
import Uranus from "./pages/Uranus"; // ----- Uranus Page
import Neptune from "./pages/Neptune"; // ----- Neptune
import BeginingPage from "./pages/beginingPage/BeginingPage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

// =============== REACT ROUTER =============== //
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<BeginingPage />} />
            {/* ----------  Page Not Found ---------- */}
            <Route path="*" element={<PageNotFound />} />

            {/* ----------  MERCURY ---------- */}
            <Route path="/Mercury" element={<Mercury />} />

            {/* ----------  VENUS ---------- */}
            <Route path="/Venus" element={<Venus />} />

            {/* ----------  EARTH ---------- */}
            <Route path="/Earth" element={<Earth />} />

            {/* ----------  MARS ---------- */}
            <Route path="/Mars" element={<Mars />} />

            {/* ----------  JUPITER ---------- */}
            <Route path="/Jupiter" element={<Jupiter />} />

            {/* ----------  JUPITER ---------- */}
            <Route path="/Saturn" element={<Saturn />} />

            {/* ----------  URANUS ---------- */}
            <Route path="/Uranus" element={<Uranus />} />

            {/* ----------  URANUS ---------- */}

            <Route path="/Neptune" element={<Neptune />} />
        </Route>
    )
);

// CREATE CONTEXT
export const appContext = createContext<any>(null);

//------------------------- TRANSLATE
import ENG_TRANSLATE from "./assets/translate/eng.json";
import GEO_TRANSLATE from "./assets/translate/geo.json";
import { translateReducer, initialState } from "./services/translate";
function App() {
    const [translateState, dispatch] = useReducer(
        translateReducer,
        initialState
    );

    const [activeplanetReview, setActvePlanetReview] = useState<number | null>(
        null
    );

    const handleClick = (itemNumer: number) => {
        if (activeplanetReview === itemNumer) {
            setActvePlanetReview(null);
        } else {
            setActvePlanetReview(itemNumer);
        }
    };

    return (
        <div className="App">
            <appContext.Provider
                value={{
                    ENG_TRANSLATE,
                    GEO_TRANSLATE,
                    translateState,
                    dispatch,
                    activeplanetReview,
                    setActvePlanetReview,
                    handleClick,
                }}
            >
                <RouterProvider router={routes} />
            </appContext.Provider>
        </div>
    );
}

export default App;
