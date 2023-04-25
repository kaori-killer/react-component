import Product from '../types/Product';

type ProductRowProps = {
    product: Product;
}

function ProductRow({ product } : ProductRowProps) {
    return (
        <tr>
            <td>
                <span 
                    style={{
                        color: product.stocked ? '#000' : '#F00',
                    }}
                >
                    {product.name}
                </span>
            </td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;