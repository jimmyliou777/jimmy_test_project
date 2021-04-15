import React from 'react';
import styles from '~/styles/example.scss';

export default function Example(): JSX.Element {
    return <div className={'global-container ' + styles['local-container']}> Test Scss </div>;
}
