import React, { useEffect } from 'react';
interface Props {
    children: JSX.Element;
}

const Layout = (props: Props): JSX.Element => {
    console.log('init_layout');
    useEffect(() => {
        console.log('layout');
    }, []);
    return <div>{props.children}</div>;
};

export default Layout;
