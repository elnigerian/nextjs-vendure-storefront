import * as React from 'react';
import Link from 'next/link';
import { withApollo } from '../../lib/withApollo';
import { useForm } from 'react-hook-form';
import {useMutation} from "@apollo/react-hooks";
import {RegisterCustomerAccountDocument, RegisterCustomerInput} from "../../generated/apolloShopAPIComponents";

type RegisterProps = {
    options?: any;
};

const Register: React.FC<RegisterProps> = () => {
    const [registerCustomerAccount] = useMutation(RegisterCustomerAccountDocument)
    const [payload, setPayload] = React.useState<any>(null);
    const [firstName, setFirstName] = React.useState<string>('');
    const [lastName, setLastName] = React.useState<string>('');
    const [emailAddress, setEmailAddress] = React.useState<string>('');
    const { handleSubmit, register, errors } = useForm();

    const onRegisterSubmit = async (entries: any) => {
        const {first, last, email} = entries;
        setEmailAddress(email);
        setLastName(last);
        setFirstName(first);

        const input: RegisterCustomerInput = {
            firstName,
            lastName,
            emailAddress,
        }
        const response = await registerCustomerAccount({
            variables: {input},
        });

        if(response && response.data && response.data.registerCustomerAccount) {
            const {registerCustomerAccount} = response.data
            setPayload(registerCustomerAccount)
        }
    };
    return (
        <div className="md:min-h-screen flex flex-col flex-no-wrap items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {
                payload ?
                    <div>
                        <p className='text-center font-roboto-sans text-4xl md:text-6xl text-gray-900'>Your registered! Please check your inbox to verify your account. </p>
                    </div> :
                    <div className="max-w-md w-full">
                        <div>
                            <h2 className="mt-3 text-center text-3xl leading-9 font-extrabold text-gray-900">
                                Create your account
                            </h2>
                        </div>
                        <form className="mt-8" method='POST' onSubmit={(e: any) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleSubmit(onRegisterSubmit)(e);
                        }}>
                            <div className="flex flex-col flex-no-wrap space-y-3 shadow-sm">
                                <div className="">
                                    <input
                                        aria-label="First name"
                                        name="first"
                                        type="text"
                                        required
                                        ref={register({required: true})}
                                        className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                        placeholder="First name..."
                                    />
                                </div>
                                <div className="">
                                    <input
                                        aria-label="Last name"
                                        name="last"
                                        type="text"
                                        required
                                        ref={register({required: true})}
                                        className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                        placeholder="Last name..."
                                    />
                                </div>
                                <div className="">
                                    <input
                                        aria-label="Email address"
                                        name="email"
                                        type="email"
                                        required
                                        ref={register({
                                            required: true,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'invalid email address',
                                            },
                                        })}
                                        className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                        placeholder="Email address..."
                                    />
                                    {errors.email && errors.email.message}
                                </div>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-gray-900 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="pt-3">
                            <Link href="/signin">
                                <a>Have an account? Login</a>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default withApollo(Register);
