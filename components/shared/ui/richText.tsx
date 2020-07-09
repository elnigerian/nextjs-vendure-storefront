import * as React from 'react';

type RichTextProps = {
    title?: string;
    missionStatement?: string;
    richTextStatement?: string;
};

const RichText: React.FC<RichTextProps> = ({ title, richTextStatement }) => {
    return (
        <div id="rich-text" className="my-24 ">
            <div className="max-w-screen-xl mx-auto py-10">
                <div className="mx-3 flex flex-col items-start  font-roboto-sans">
                    <p className="order-1 mb-1 uppercase text-sm">{title}</p>
                    <p className="order-2 font-extrabold text-4xl tracking-wider leading-tight">{richTextStatement}</p>
                </div>
            </div>
        </div>
    );
};

export default RichText;
