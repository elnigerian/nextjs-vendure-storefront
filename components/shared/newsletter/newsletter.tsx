import * as React from 'react';

type NewsletterProps = {
    options?: any;
};

const Newsletter: React.FC<NewsletterProps> = () => {
    return (
        <div className="">
            <h2 className="font-roboto-sans font-bold tracking-wider">Want more updates? Subscribe!</h2>
            <form className="mt-2" action="#" method="POST">
                <div className="relative shadow-sm font-medium tracking-wider">
                    <input
                        aria-label="Email address"
                        name="email"
                        type="email"
                        required
                        className="appearance-none rounded-none block w-full h-12 px-3 py-2 border border-gray-900 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                        placeholder="Email address"
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 px-2 text-sm text-white bg-gray-900 h-12"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;
