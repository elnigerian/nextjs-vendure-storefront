import * as React from 'react';
import { NextPage } from 'next';
import Register from '../components/register/register';
import Layout from '../components/shared/landing/layout';

const SignUp: NextPage = () => {
    return (
        <Layout title="Home | Next.js + Vendure">
            <Register />
        </Layout>
    );
};

export default SignUp;
