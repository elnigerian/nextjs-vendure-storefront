import * as React from 'react';
import Head from 'next/head';

type HeaderProps = {
    title?: string;
};

const Header: React.FC<HeaderProps> = ({ title }: any) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    );
};

export default Header;
