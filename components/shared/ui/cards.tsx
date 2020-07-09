import * as React from 'react';

type CardsProps = {
    title?: string;
    showTitle?: any;
    heading?: any;
    contentOne?: any;
    contentTwo?: any;
    imageOneSrc?: any;
    imageTwoSrc?: any;
    imageOneDesc?: any;
    imageTwoDesc?: any;
    showCtaFlag?: any;
    ctaText?: any;
    ctaHrefLoc?: any;
};

export const BaseCard: React.FC<CardsProps> = () => {
    return (
        <React.Fragment>
            <div className="bg-gray-200"></div>
        </React.Fragment>
    );
};
