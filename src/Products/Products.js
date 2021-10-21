import React from 'react';
import './Products.css';
import ac from '../data';
import AcCard from '../components/AcCard/AcCard';
const Products=() => {

    return (
        <div className='container'>
            <h1 className='text-center my-5 fw-bold product-title'>All Exclusive <span id='products-title'> AC Products</span></h1>
            <div className="products row justify-content-center">
                {
                    ac.map(p =>
                        <AcCard
                            key={p.acid}
                            product={p}
                        ></AcCard>
                    )
                }
            </div>
        </div>
    );
};

export default Products;