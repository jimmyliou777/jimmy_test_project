export const INITIAL_STATE = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0
};

// 保留 Redux 的做法，直接將 initState 給 Reducer
const setNumReducer = (state: any = INITIAL_STATE, action: { type: string, payload: { number: string, index: number } }): any => {
    switch (action.type) {
        case "SET_NUM":
            return {
                ...state,
                [action.payload.number]: action.payload.index,
            };
        case "REMOVE_NUM":
            return {
                ...state,
                [action.payload.number]: 0,
            };
        case "CLEAR_NUM":
            const newState = { ...state };
            // others set unselect
            Object.keys(newState).forEach((index) => {
                newState[index] === Number(action.payload.index) && (newState[index] = 0);
            });

            return {
                ...newState,
            };
        default:
            return state;
    }
};

export { setNumReducer };
