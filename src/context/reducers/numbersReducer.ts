const object = {
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
const initState = {
    current: [],
    // 0:unselect,1:select,2:disable
    blocks: {
        1: {
            ...object
        },
        2: {
            ...object
        },
        3: {
            ...object
        },
        4: {
            ...object
        }
    }
};

// 保留 Redux 的做法，直接將 initState 給 Reducer
const setNumReducer = (state: any = initState, action: any = {}): any => {
    const blocks = { ...state.blocks };
    switch (action.type) {
        case "SET_NUM":
            // Disable Others
            Object.keys(blocks).forEach((key) => {
                blocks[key][action.payload.number] = 2;
            });

            const add_num = parseInt(action.payload.number, 10);
            return {
                ...state,
                current: [...state.current, add_num],
                blocks: {
                    ...blocks,
                    [action.payload.index]: {
                        ...state.blocks[action.payload.index],
                        [action.payload.number]: 1
                    }
                }
            };
        case "REMOVE_NUM":
            Object.keys(blocks).forEach((key) => {
                blocks[key][action.payload.number] = 0;
            });
            const remove_num = parseInt(action.payload.number, 10);
            const current = [...state.current].filter((n) => {
                return n !== remove_num;
            });

            return {
                ...state,
                current: [...current],
                blocks: {
                    ...blocks
                }
            };
        case "CLEAR_NUM":
            const target_block = { ...state.blocks[action.payload.index] };

            const tag_numbers = Object.keys(target_block).filter((key) => {
                const int_key = parseInt(key, 10);
                return target_block[int_key] === 1 && state.current.includes(int_key);
            });

            // convert array string to number
            const nuevo = tag_numbers.map((i) => Number(i));
            console.log("nuevo:", nuevo);

            const new_current = [...state.current].filter((num) => {
                return nuevo.includes(num) === false;
            });
            const new_blocks = { ...state.blocks };

            // others set unselect
            Object.keys(new_blocks).forEach((index) => {
                nuevo.forEach((num) => {
                    new_blocks[index][num] = 0;
                });
            });

            // target block reset
            Object.keys(target_block).forEach((index) => {
                // it is not unselect to set 0
                target_block[index] !== 2 && (target_block[index] = 0);
            });

            return {
                ...state,
                current: [...new_current],
                blocks: {
                    ...new_blocks,
                    [action.payload.index]: {
                        ...target_block
                    }
                }
            };
        default:
            return state;
    }
};

export { setNumReducer };
