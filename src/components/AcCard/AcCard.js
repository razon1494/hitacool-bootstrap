import React from 'react';
import {Link} from 'react-router-dom';
import './AcCard.css'

const AcCard=({product}) => {
    const {img1, brand, capacity,type,type1,model, system, price, origin, acid, inverter,installation}=product;
    return (
        <div className='col-md-3 m-3 p-4 ac-card'>
            <div className="">
            <img className='img-fluid' src={img1} alt="" /></div>
            <h3 className='product-detail-title'>{brand} {capacity} {type1} {installation} type ac, Model {model} </h3>
            {
                inverter? <h5 className='details-inverter'>Inverter({system})</h5 > : <h5 className='details-inverter'>Non Inverter ({system})</h5>
            }
            <p className='details-origin'>Origin: {origin}</p>
            {/* <p>{type}</p> */}
            <h5 className='details-price'>Price: &#2547; {price}</h5>
            {/* <p>Product Code: {acid+1000}</p> */}
            <Link to= {`/products/${acid}`}><button className='ac-card-btn mx-auto'>Details</button></Link>

        </div>
    );
};

export default AcCard;