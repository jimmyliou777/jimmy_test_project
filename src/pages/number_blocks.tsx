import React, { useReducer } from 'react';
import { ReducerContext } from '~/context/numbersContext';
import { setNumReducer, INITIAL_STATE } from '~/context/reducers/numbersReducer';
import Block from '~/components/Blocks';
import '~/styles/number_blocks.scss';
// import '~/styles/styles.css';
export default function App(): JSX.Element {
    // 使用 useReducer 將創建後的 state 及 dispatch 放進 reducer
    const reducer = useReducer(setNumReducer, INITIAL_STATE);
    return (
        <ReducerContext.Provider value={reducer}>
            <div className="App">
                <h3>Hello CodeSandbox</h3>
                <p>每個區域都有10個數字共有4個區域，需完成以下條件</p>

                <p>
                    1. 當某一區域選擇後，其他三個區域要無法選取(ex:
                    第一區域選擇數字&quot;1&quot;之後，第二第三第四區域數字&quot;1&quot;不可選
                </p>
                <p>
                    2. 某區域已選號碼&quot;2&quot;，再次點擊後所有區域需可選取(ex:
                    第一區域已選數字&quot;2&quot;，重新點擊後個區域數字&quot;2&quot;可再選取{' '}
                </p>
                <p>3. 需使用react hook</p>
                <p>4. 需要某一區域已選取號碼清空按鈕,並同步其他區域號碼狀態為可選取</p>
                <div className="blocks">
                    <Block idx={1} />
                    <Block idx={2} />
                    <Block idx={3} />
                    <Block idx={4} />
                </div>
            </div>
        </ReducerContext.Provider>
    );
}
