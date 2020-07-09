import * as React from 'react';

type MobileNavBarProps = {
    options?: any;
    menuState: string; //hidden = closed or block = open
    menuItems: any[];
};

const MobileNavBar: React.FC<MobileNavBarProps> = ({ menuState, menuItems = []}: any) => {
    return (
        <React.Fragment>
            {/*
                <!--
                  Mobile menu, toggle classes based on menu state.

                  Menu open: "block", Menu closed: "hidden"
                  className="block px-3 py-2 rounded-none text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                -->
            */}
            <div className={menuState + ' sm:hidden z-10 min-h-screen overflow-y-hidden'}>
                <div className="px-2 pt-2 pb-3">
                    {
                        menuItems && menuItems.length > 0 && menuItems.map((menu : any) => {
                            const {id, name, slug} = menu;
                            return (
                                <div  key={slug+ '-' + id} className='w-full border-b-2 border-gray-200 flex flex-row flex-no-wrap items-center justify-between'>
                                    <a href="#"
                                        className="mt-1 px-3 py-2 block rounded-none text-base font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                                    >
                                        {name}
                                    </a>
                                    <span className='pr-6 '>+</span>
                                </div>
                            )
                        })
                    }
                    <div className='w-full border-b-2 border-gray-200'>
                        <a
                            href="#"
                            className="mt-1 block px-3 py-2 rounded-none text-base font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                        >
                            Login
                        </a>
                    </div>
                    <div  className='w-full border-b-2 border-gray-200'>
                        <a
                            href="#"
                            className="mt-1 block px-3 py-2 rounded-none text-base font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                        >
                            Register
                        </a>
                </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MobileNavBar;
