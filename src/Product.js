import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductItem;