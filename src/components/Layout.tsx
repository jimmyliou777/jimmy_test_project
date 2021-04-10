import React, { useEffect } from 'react';
type Props = {
    children: JSX.Element;
};

const Layout = (props: Props): JSX.Element => {
    useEffect(() => {
        console.log('layout');
    }, []);
    return <div>{props.children}</div>;
};

export default Layout;
