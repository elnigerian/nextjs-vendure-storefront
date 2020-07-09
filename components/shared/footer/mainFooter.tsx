import * as React from 'react';
import Newsletter from '../newsletter/newsletter';
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from '../icons/socialIcons';

const MainFooter = () => {
    return (
        <footer className="bg-gray-200">
            <div className="max-w-screen-xl mx-auto mt-10 mb-6">
                <div className="flex flex-col flex-no-wrap">
                    <div className="my-6 flex flex-col md:flex-row md:items-start justify-around font-roboto-sans">
                        <div className="py-3 flex flex-col flex-no-wrap items-center justify-center space-y-2">
                            <h2 className="font-bold text-lg">About</h2>
                            <p className="text-base tracking-wider">About Us</p>
                            <p className="text-base tracking-wider">Contact Us</p>
                        </div>
                        <div className="py-3 flex flex-col flex-no-wrap items-center justify-center space-y-2">
                            <h2 className="font-bold text-lg">Orders</h2>
                            <p className="text-base tracking-wider">Shipping</p>
                            <p className="text-base tracking-wider">Track My Order</p>
                        </div>
                        <div className="py-3 flex flex-col flex-no-wrap items-center justify-center space-y-2">
                            <h2 className="font-bold text-lg">Legal</h2>
                            <p className="text-base tracking-wider">Return Policy</p>
                            <p className="text-base tracking-wider">Privacy Policy</p>
                            <p className="text-base tracking-wider">Terms & Conditions</p>
                        </div>
                        <div className="py-3 flex flex-col flex-no-wrap items-center justify-center space-y-2">
                            <Newsletter />
                            <div className="my-2 flex flex-row flex-no-wrap items-center justify-around">
                                <TwitterIcon />
                                <FacebookIcon />
                                <InstagramIcon />
                                <YouTubeIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
