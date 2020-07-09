import * as React from 'react';
import {CloseMenuIcon} from "../shared/icons/baseIcons";

type CartContainerProps = {
    options?: any;
    showCart: string;
    close?: any;
};

const CartContainer: React.FC<CartContainerProps> = ({ showCart, close }: any) => {
    return (
        <React.Fragment>
            <div
                className={showCart + ' z-10 min-h-screen overflow-y-hidden bg-gray-100'}
            >
                <div className="flex flex-col flex-no-wrap justify-between">
                    <div className='h-12 px-2 py-3 border-b-2 border-black flex flex-row flex-no-wrap'>
                        <p className='w-11/12 text-center'>Your Cart</p>
                        <button className='w-1/12 inline-flex items-center justify-center hover:bg-white hover:text-white focus:outline-none' onClick={() => close()}>
                            <span className='' aria-label='Close cart'><CloseMenuIcon /></span>
                        </button>
                    </div>
                    <div className="px-3 py-2">
                        <p className="my-5 text-gray-900 text-center align-middle sm:text-2xl">Cart is empty. </p>
                    </div>
                    <div className="sm:w-full px-2 py-2">
                        <button
                            onClick={() => close()}
                            className=" w-full block px-3 py-2 rounded-none border-solid border-2 border-gray-700 text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartContainer;
