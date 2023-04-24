export const initialState = {
    welocemText: "",
};

type actionType = {
    type: string;
    payload: string;
};
export const reducer = (state: typeof initialState, action: actionType) => {
    const newState = { ...state };
    const date = new Date();
    switch (action.type) {
        case "GOOD_MORNING":
            if (date.getHours() >= 4 && date.getHours() <= 12) {
                newState.welocemText = action.payload as string;
            }
            return newState;
        case "GOOD_AFTERNOON":
            if (date.getHours() >= 12 && date.getHours() <= 17) {
                newState.welocemText = action.payload as string;
            }
            return newState;
        case "GOOD_EVENING":
            if (date.getHours() >= 17 && date.getHours() <= 24) {
                newState.welocemText = action.payload as string;
            }
            return newState;
        default:
            throw new Error();
    }
};
