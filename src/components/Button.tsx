import React from 'react';

type Props = {
    children: JSX.Element;
};

const Button = (props: Props): JSX.Element => {
    const { children } = props;
    return <button>{children}</button>;
};

export default Button;
