import Link from 'next/link';
import React, { useEffect } from 'react';

interface Props {
    a: number;
    b: string;
}

export default function Home(params: Props): JSX.Element {
    const a: number | string = params.a || '123';
    useEffect(() => {
        console.log(`123-${a}`);
    }, [a]);
    return (
        <ul>
            <li>
                <Link href="/a">
                    <a>a</a>
                </Link>
            </li>
            <li>
                <Link href="/b">
                    <a>b</a>
                </Link>
            </li>
        </ul>
    );
}
