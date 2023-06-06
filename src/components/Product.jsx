import React from 'react';

import './product.scss';

const Product = () => {
    return (
        <div className='product'>
            <div className='product__desc'>
                <h3>Balance Beam Oil Control Moisturizer</h3>
                <h1>$14.99</h1>
            </div>
            <img
                src='https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
                alt=''
            />
        </div>
    );
};

export default Product;
