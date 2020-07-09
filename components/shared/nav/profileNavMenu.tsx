import * as React from 'react';

type ProfileNavMenuProps = {
    options?: any;
};
const ProfileNavMenu: React.FC<ProfileNavMenuProps> = () => {
    const [showSubMenu, setShowSubMenu] = React.useState(false);
    return (
        <React.Fragment>
            <div className="ml-3 mr-3 relative">
                <div>
                    <button
                        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                        onMouseOver={() => setShowSubMenu(true)}
                        onMouseEnter={() => setShowSubMenu(true)}
                        onMouseOut={() => setShowSubMenu(false)}
                        onMouseLeave={() => setShowSubMenu(false)}
                    >
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </button>
                </div>
                {/*<!--
                                  Profile dropdown panel, show/hide based on dropdown state.

                                  Entering: "transition ease-out duration-100"
                                    From: "transform opacity-0 scale-95"
                                    To: "transform opacity-100 scale-100"
                                  Leaving: "transition ease-in duration-75"
                                    From: "transform opacity-100 scale-100"
                                    To: "transform opacity-0 scale-95"
                                -->*/}
                {showSubMenu && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                        <div
                            className="py-1 rounded-md bg-white shadow-xs"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu"
                        >
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                role="menuitem"
                            >
                                Your Profile
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                role="menuitem"
                            >
                                Settings
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                role="menuitem"
                            >
                                Sign out
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default ProfileNavMenu;
