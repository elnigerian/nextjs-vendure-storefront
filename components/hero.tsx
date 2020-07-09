import * as React from 'react';

type HeroProps = {
    options?: any;
};

const Hero: React.FC<HeroProps> = () => {
    return (
        <div className="max-w-screen-xl mx-auto ">
            <div
                className="bg-blue-100 mb-16 border border-white border-4 h-screen opacity-100 shadow flex flex-col flex-no-wrap items-center justify-center"
                style={{
                    backgroundImage:
                        'url("https://demo.vendure.io:443/assets/preview/40/abel-y-costa-716024-unsplash__preview.jpg")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="">
                    <h2 className="my-10 font-roboto-sans font-extrabold text-5xl md:text-6xl text-gray-900 text-center">
                        Vendor Storefront
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;
