import * as React from 'react';
import MobileNavBar from './mobileNavBar';
import ProfileNavMenu from './profileNavMenu';
import { CloseMenuIcon, MenuIcon, ShoppingBasketIcon, UserIcon } from '../icons/baseIcons';
import NavBar from './navBar';
import CartContainer from '../../cart/cartContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const IndexLink = '/';

type NavContainerProps = {
    options?: any;
    isAuthenticated?: boolean;
    mobileMenuState: string;
    cssClassName: string;
    showCart: string;
    toggleMobileMenu?: any;
    toggleCartVisibility?: any;
    navMenuCollection: any[];
    navMenuItems?: any[];
};

const NavContainer: React.FC<NavContainerProps> = ({
    isAuthenticated = false,
    toggleMobileMenu,
    toggleCartVisibility,
    mobileMenuState,
    showCart,
    navMenuCollection= [],
    cssClassName= ''
}) => {
    const router = useRouter();
    const [mobileCssClassName, setMobileCssClassName] = React.useState('');
    const [cartCssClassName, setCartCssClassName] = React.useState('');
    React.useEffect(() => {
        if (cssClassName === 'fixed') {
            setMobileCssClassName('absolute top-0 right-0 bg-white w-3/4')
        }
        if (showCart === 'block' && cssClassName === 'fixed'){
            setCartCssClassName('absolute top-0 right-0 bg-white w-11/12 md:w-5/12 lg:w-3/12');
        }
    }, [cssClassName, toggleCartVisibility]);
    return (
        <React.Fragment>
            <nav className="bg-white font-roboto-sans">
                <div className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/*<!-- Mobile menu button-->*/}
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-none hover:bg-white focus:outline-none focus:bg-white transition duration-150 ease-in-out"
                                aria-label="Main menu"
                                aria-expanded="false"
                                onClick={() => toggleMobileMenu()}
                            >
                                {/*<!-- Icon when menu is closed. -->*/}
                                <MenuIcon menuState={mobileMenuState === 'hidden' ? 'block' : 'hidden'} />
                                {/*<!-- Icon when menu is open. -->*/}
                                <CloseMenuIcon menuState={mobileMenuState === 'hidden' ? 'hidden' : 'block'} />
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="/static/logos/cube-logo-line-icon-nostroke.png"
                                        alt="Vendure logo"
                                    />
                                </Link>
                                <Link href="/">
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="/static/logos/cube-logo-line-icon-nostroke.png"
                                        alt="Vendure logo"
                                    />
                                </Link>
                            </div>
                            <NavBar menuItems={navMenuCollection}/>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/*<!-- Profile dropdown start after login-->*/}
                            {isAuthenticated ? (
                                <ProfileNavMenu />
                            ) : (
                                <button aria-label="User login" onClick={() => router.push('/signin')}>
                                    <UserIcon />
                                </button>
                            )}
                            {/*<!-- Profile dropdown end -->*/}
                            <button
                                className="p-1 border-2 border-transparent text-white rounded-none hover:text-white focus:outline-none focus:text-white focus:bg-white transition duration-150 ease-in-out"
                                aria-label="Notifications"
                                onClick={() => toggleCartVisibility()}
                            >
                                <ShoppingBasketIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={mobileCssClassName}>
                    <MobileNavBar menuState={mobileMenuState} menuItems={navMenuCollection} />
                </div>
                <div className={cartCssClassName}>
                    <CartContainer showCart={showCart} close={toggleCartVisibility} />
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavContainer;
