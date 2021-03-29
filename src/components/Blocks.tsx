import React, { useContext } from 'react';
import { ReducerContext } from '~/context/numbersContext';
interface Props {
    idx: number;
}
const Block = ({ idx }: Props): any => {
    const [state, dispatch] = useContext(ReducerContext);
    const { blocks } = state;
    console.log(typeof dispatch);

    const setNum = (number: string, index: number) => () => {
        if (blocks[index][number] === 1) {
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
            {Object.keys(blocks[idx]).map((number) => {
                return (
                    <button
                        key={`block_${idx}_${number}`}
                        className={`${blocks[idx][number] === 1 ? 'active' : ''}`}
                        onClick={setNum(number, idx)}
                        disabled={blocks[idx][number] === 2}
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
