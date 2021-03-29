const initState = {
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
const setNumReducer = (state: any = initState, action: any = {}): any => {
    const newState = { ...state };
    switch (action.type) {
        case "SET_NUM":
            newState[action.payload.number] = action.payload.index;

            return {
                ...state,
                ...newState,
            };
        case "REMOVE_NUM":
            newState[action.payload.number] = 0;

            return {
                ...state,
                ...newState,
            };
        case "CLEAR_NUM":

            // others set unselect
            Object.keys(newState).forEach((index) => {
                newState[index] === Number(action.payload.index) && (newState[index] = 0);
            });

            return {
                ...state,
                ...newState,
            };
        default:
            return state;
    }
};

export { setNumReducer };
