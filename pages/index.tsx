import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/shared/landing/layout';
import Hero from '../components/hero';
import RichText from '../components/shared/ui/richText';
import {withApollo} from "../lib/withApollo";
import {useQuery} from "@apollo/react-hooks";
import {GetTopSellersDocument} from "../generated/apolloShopAPIComponents";
import {formatCurrency} from "../utils/formatCurrency";

const IndexPage: NextPage = () => {
    const {data, loading} = useQuery(GetTopSellersDocument);
    const [topSellers, setTopSellers] = React.useState<any>([]);
    React.useEffect(() => {
        if(data && data.search) {
            const {items} = data.search;
            setTopSellers(items);
        }
    }, [data]);

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    return (
        <Layout title="Home | Next.js + Vendure">
            <Hero />
            <RichText
                richTextStatement="Access to what you want and when you want it in just one click."
                title="About Us"
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between font-roboto-sans text-gray-900">
                    <div className="bg-gray-200 w-11/12 md:w-1/4 my-6">
                        <a className="block py-12 text-center text-4xl">Electronics </a>
                    </div>
                    <div className="bg-gray-200 w-11/12 md:w-1/4 my-6">
                        <p className="py-12 text-center text-4xl">Home & Garden </p>
                    </div>
                    <div className="bg-gray-200 w-11/12 md:w-1/4 my-6">
                        <p className="py-12 text-center text-4xl">Sports & Outdoor </p>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="my-24 flex flex-col flex-no-wrap">
                    <div>
                        <h2 className="mx-2 md:mx-0 font-roboto-sans font-bold text-4xl">Top Sellers</h2>
                    </div>
                    <div className="my-10">
                        <div className='flex flex-row flex-wrap'>
                            {
                                topSellers && topSellers.length > 0 && topSellers.map((item: any) =>{
                                    const imageUrl = item.productAsset.preview;
                                    const {productId, productName, slug, priceWithTax} = item;
                                    const {min} = priceWithTax;
                                    return (
                                        <div className="max-w-sm my-3 mx-2 md:mx-3 rounded overflow-hidden shadow-lg" key={productId} aria-label={slug}>
                                            <div className='relative pb-2/3 w-screen md:w-64 h-56 md:h-64'>
                                                <img className="absolute top-0 w-full h-full object-cover object-center" src={imageUrl} alt="Sunset in the mountains" />
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2">{productName}</div>
                                                <p className="text-gray-700 text-base"> {formatCurrency("$", min)}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default withApollo( IndexPage );
