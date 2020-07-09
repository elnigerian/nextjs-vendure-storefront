import * as React from 'react';
import Link from 'next/link';

const Login = () => {
    return (
        <React.Fragment>
            <div className="md:min-h-screen flex flex-col flex-no-wrap items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <h2 className="mt-3 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm">
                            <div>
                                <input
                                    aria-label="Email address"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="-mt-px">
                                <input
                                    aria-label="Password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm leading-5">
                                <a
                                    href="#"
                                    className="font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-gray-900 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
                <div className="pt-3">
                    <Link href="/signup">
                        <a>No account? Register here</a>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
