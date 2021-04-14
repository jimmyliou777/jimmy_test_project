import React from 'react';

type Props = {
    children: JSX.Element;
};

const Button = (props: Props): JSX.Element => {
    const { children } = props;
    const handleClick = () => {
        console.log('handleClick-->>>');
    };
    return <button onClick={handleClick}>{children}</button>;
};

export default Button;
