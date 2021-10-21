import React from 'react';
import {Link} from 'react-router-dom';

const AcCard=({product}) => {
    const {img1, brand, capacity,type,type1,model, system, price, origin, acid, inverter}=product;
    return (
        <div className='col-md-4'>
            <div className="">
            <img className='img-fluid' src={img1} alt="" /></div>
            <h3>{brand} {capacity} {type1} type ac, Model {model} </h3>
            {
                inverter? <h5>Inverter({system})</h5> : <h5>Non Inverter ({system})</h5>
            }
            <h4>Origin: {origin}</h4>
            <p>{type}</p>
            <h5>Price: &#2547; {price}</h5>
            <p>Product Code: {acid+1000}</p>
            <Link to= {`/products/${acid}`}><button className=''>Details</button></Link>

        </div>
    );
};

export default AcCard;