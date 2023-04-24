import TRANSLATE_ENG from "../assets/translate/eng.json";

export const initialState = {
    translate: TRANSLATE_ENG,
};

type actionType = {
    type: string;
    payload: any;
};

export const translateReducer = (
    state: typeof initialState,
    action: actionType
) => {
    const newState = { ...state };
    switch (action.type) {
        case "TRANSLATE_GEO":
            newState.translate = action.payload as any;
            return newState;
        case "TRANSLATE_ENG":
            newState.translate = action.payload as any;
            return newState;
        default:
            throw new Error();
    }
};
