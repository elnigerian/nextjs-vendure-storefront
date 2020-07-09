import * as React from 'react';
import { NextPage } from 'next';
import Login from '../components/security/login';
import Layout from '../components/shared/landing/Layout';

const SignIn: NextPage = () => {
    return (
        <Layout title="Home | Next.js + Vendure">
            <Login />
        </Layout>
    );
};

export default SignIn;
