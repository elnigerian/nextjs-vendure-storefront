import * as React from "react";

type ProductDetailProps = {
    productId: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({productId}: any) => {
    const [id, setId] = React.useState<any>(productId);
    console.log('This is the ID passed => ', id);
    React.useEffect(() => {
        setId(productId);
    }, [productId]);
    return (
        <React.Fragment>
            <p> This is the productId: {productId}</p>
        </React.Fragment>
    );
}

export default ProductDetail;
