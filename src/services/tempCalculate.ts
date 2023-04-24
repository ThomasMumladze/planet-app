export const initialState = {
    temperature: 0,
};
type actionType = {
    type: string;
    payload: number;
};
export const tempReducer = (state: typeof initialState, action: actionType) => {
    const newState = { ...state };
    switch (action.type) {
        case "AVERAGE_TEMPERATURE":
            if (newState.temperature >= 16 && newState.temperature <= 36) {
                newState.temperature = action.payload as number;
            }
            return newState;

        case "HIGHT_TEMPERATURE":
            if (newState.temperature >= 36) {
                newState.temperature = action.payload as number;
            }
            return newState;

        case "LOW_TEMPERATURE":
            if (newState.temperature >= 0 && newState.temperature <= 16) {
                newState.temperature = action.payload as number;
            }
            return newState;

        case "FREEZING":
            if (newState.temperature < 0) {
                newState.temperature = action.payload as number;
            }
            return newState;

        default:
            throw new Error();
    }
};
