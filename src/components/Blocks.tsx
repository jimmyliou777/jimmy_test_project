import React, { useContext } from 'react';
import { ReducerContext } from '~/context/numbersContext';
type Props = {
    idx: number;
};
const Block = ({ idx }: Props): any => {
    const [state, dispatch] = useContext(ReducerContext);

    const setNum = (number: number, index: number) => () => {
        if (state[number] === index) {
            dispatch({ type: 'REMOVE_NUM', payload: { number, index } });
        } else {
            dispatch({ type: 'SET_NUM', payload: { number, index } });
        }
    };

    const clearNum = (index: number) => () => {
        dispatch({ type: 'CLEAR_NUM', payload: { index } });
    };
    return (
        <div className="block">
            <h1>{idx}</h1>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
                return (
                    <button
                        key={`block_${idx}_${number}`}
                        className={`${state[number] === idx ? 'active' : ''}`}
                        onClick={setNum(number, idx)}
                        disabled={state[number] > 0 && state[number] !== idx}
                    >
                        {number}
                    </button>
                );
            })}
            <button onClick={clearNum(idx)}>clear</button>
        </div>
    );
};

export default Block;
