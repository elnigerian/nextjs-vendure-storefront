import * as React from 'react';
import NavContainer from '../nav/navContainer';
import Header from './header';
import MainFooter from '../footer/mainFooter';
import NotificationBar from '../notificationBar';
import {withApollo} from "../../../lib/withApollo";
import {useQuery} from "@apollo/react-hooks";
import {CollectionsDocument} from "../../../generated/apolloShopAPIComponents";
import _ from 'lodash';

type LayoutProps = {
    children?: any;
    title?: string;
};

const Layout = ({ children, title = 'Vendure NextJS Store Front' }: LayoutProps) => {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [mobileMenuState, setMobileMenuState] = React.useState('hidden');
    const [cartVisibilityState, setCartVisibilityState] = React.useState('hidden');
    const [cssClassName, setCssClassName] = React.useState('');
    const {data, error, loading} = useQuery(CollectionsDocument)
    const [navMenuCollection, setNavMenuCollection] = React.useState<any>(null);
    React.useEffect(() => {
        setAuthenticated(false);
        if(data && data.collections) {
            const {collections} = data;
            const {items} = collections;
            const navCollection = _.filter(items, (item: any) => {
                const {parent} = item;
                return parent && parent.name && parent.name === '__root_collection__'
            }); //.map((item: any) => item.name);
            setNavMenuCollection( navCollection );
        }
        if (mobileMenuState !== 'hidden' || cartVisibilityState !== 'hidden') {
            setCssClassName('fixed');
        } else {
            setCssClassName('');
        }
    }, [data, mobileMenuState, cartVisibilityState]);

    const toggleMobileMenu = () => {
        const toggle = mobileMenuState === 'hidden' ? 'block' : 'hidden';
        setMobileMenuState(toggle);
    };

    const toggleCartVisibility = () => {
        const toggle = cartVisibilityState === 'hidden' ? 'block' : 'hidden';
        setCartVisibilityState(toggle);
    };

    if(loading || !data) {
        return <div className=''> Loading...</div>
    }
    if(error) {
        return <p>An error has occurred. Please try again later.</p>
    }

    console.log('cssClassName => ', cssClassName);
    console.log('cartVisibilityState => ', cartVisibilityState);
    return (
        <React.Fragment>
            <Header title={title} />
            <div className={cssClassName}>
                <NotificationBar />
                <NavContainer
                    isAuthenticated={authenticated}
                    toggleMobileMenu={toggleMobileMenu}
                    toggleCartVisibility={toggleCartVisibility}
                    mobileMenuState={mobileMenuState}
                    showCart={cartVisibilityState}
                    navMenuCollection={navMenuCollection}
                    cssClassName={cssClassName}
                />
                {children}
                <MainFooter />
            </div>
        </React.Fragment>
    );
};

export default withApollo( Layout );
