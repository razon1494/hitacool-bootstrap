import React from 'react';
import {Link} from 'react-router-dom';

const Ac2Card=({ac}) => {
    const {img1, brand, capacity,type,type1,model, system, price, origin, acid, inverter,installation}=ac;
    return (
            <div className='col-md-3 m-3 p-4 ac-card'>
            <div className="">
            <img className='img-fluid' src={img1} alt="" /></div>
            <h3 className='product-detail-title'>{brand} {model} {type1}  type ac</h3>
            <p className="details-origin">Energy Saving Design, Dual Circuit Units, Reliable Protection System, Noise Free Operation, Low Maintanence Cost and Galvanized Steel Panels</p>


            <p className='details-origin'>Origin: {origin}</p>
            <Link to= {`/selfac/${acid}`}><button className='ac-card-btn mx-auto'>Details</button></Link>

        </div>

    );
};

export default Ac2Card;