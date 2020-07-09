import * as React from 'react';

export const ShoppingBasketIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={'20'} height={'20'} viewBox="0 0 20 20">
            <path d="M18.121 3.271c-.295-.256-1.906-1.731-2.207-1.991-.299-.259-.756-.28-1.102-.28H5.188c-.345 0-.802.021-1.102.28-.301.26-1.912 1.736-2.207 1.991-.297.256-.543.643-.464 1.192.079.551 1.89 13.661 1.937 13.973A.67.67 0 0 0 4 19h12a.67.67 0 0 0 .648-.565c.047-.311 1.858-13.422 1.938-13.973.078-.548-.168-.935-.465-1.191zM10 11.973c-3.248 0-3.943-4.596-4.087-5.543H7.75c.276 1.381.904 3.744 2.25 3.744s1.975-2.363 2.25-3.744h1.838c-.145.947-.84 5.543-4.088 5.543zM3.17 4.006L5 2h10l1.83 2.006H3.17z" />
        </svg>
    );
};

export const ShoppingBagIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={'20'} height={'20'} viewBox="0 0 20 20">
            <path d="M18.121 3.271c-.295-.256-1.906-1.731-2.207-1.991-.299-.259-.756-.28-1.102-.28H5.188c-.345 0-.802.021-1.102.28-.301.26-1.912 1.736-2.207 1.991-.297.256-.543.643-.464 1.192.079.551 1.89 13.661 1.937 13.973A.67.67 0 0 0 4 19h12a.67.67 0 0 0 .648-.565c.047-.311 1.858-13.422 1.938-13.973.078-.548-.168-.935-.465-1.191zM10 11.973c-3.248 0-3.943-4.596-4.087-5.543H7.75c.276 1.381.904 3.744 2.25 3.744s1.975-2.363 2.25-3.744h1.838c-.145.947-.84 5.543-4.088 5.543zM3.17 4.006L5 2h10l1.83 2.006H3.17z" />
        </svg>
    );
};

export const NotificationBellIcon = () => {
    return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
        </svg>
    );
};

export const MenuIcon = ({ menuState }: any) => {
    return (
        <svg
            className={menuState + ' h-6 w-6'}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3 12H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 6H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 18H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const HamburgerMenuIcon = ({ menuState }: any) => {
    return (
        <svg className={menuState + ' h-6 w-6'} fill="none" viewBox="0 0 20 20" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
};

export const HamburgerMenuBgBlackIcon = () => {
    return (
        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

export const CloseMenuIcon = ({ menuState }: any) => {
    return (
        <svg className={menuState + ' h-6 w-6'} viewBox="0 0 20 20">
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
    );
};

export const UserIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
        </svg>
    );
};

export const LockIcon = () => {
    return (
        <svg
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
            />
        </svg>
    );
};
