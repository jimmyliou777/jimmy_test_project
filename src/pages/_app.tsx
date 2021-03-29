import React from 'react';
import '~/styles/styles.css';
interface Props {
    Component: any;
    pageProps: any;
}
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: Props): JSX.Element {
    return <Component {...pageProps} />;
}
