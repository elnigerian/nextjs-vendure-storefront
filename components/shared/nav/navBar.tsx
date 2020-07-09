import * as React from 'react';

type NavBarProps = {
    options?: any;
    menuItems: any[];
};

const NavBar: React.FC<NavBarProps> = ({ menuItems = [] }: any) => {
    const [showMenu, setShowMenu] = React.useState(false);
    const [selected, setSelected] = React.useState('');

    const openSubMenu = (e: any, name: string) => {
        e.preventDefault();
        setShowMenu(true);
        setSelected(name);
    }
    return (
        <React.Fragment>
            <div className="hidden sm:block sm:ml-12">
                <div className="flex font-roboto-sans font-bold">
                    {
                        menuItems && menuItems.length > 0 && menuItems.map((menu : any) => {
                            const {name, slug, children} = menu;
                            return (
                                <div className='relative' key={slug}>
                                    <div id={slug}>
                                        <button onClick={(e: any) => openSubMenu(e, slug)} name={slug} type='button' role='menu'
                                           className="relative z-20 px-3 py-2 block rounded-none  text-sm font-medium leading-5 text-gray-700 hover:text-gray-900 hover:shadow-lg focus:outline-none transition duration-150 ease-in-out">
                                            {name}
                                        </button>
                                    </div>
                                    { showMenu && <button onClick={() => setShowMenu(false)} tabIndex={-1} className='fixed inset-0 w-full h-full bg-gray-700 opacity-25 cursor-default' /> }
                                    <div className='absolute z-20 bg-white w-48 rounded-none shadow-lg flex flex-col flex-no-wrap' aria-orientation="vertical" aria-labelledby={slug + "-menu"}>
                                        {
                                            showMenu &&
                                            <div className={selected === slug ? 'block' : 'hidden'}>
                                                {
                                                    children && children.length > 0 && children.map((child: any) => {
                                                        const {name, slug} = child;
                                                        return (
                                                            <div className='left-0 mt-0 shadow-none focus:bg-gray-700 hover:bg-gray-700' key={slug}>
                                                                <a href={'/' + slug}
                                                                   className="block px-3 py-2 rounded-none text-sm font-medium leading-5 text-gray-700 hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out">
                                                                    {name}
                                                                </a>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
