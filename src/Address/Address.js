import React from 'react';
import './Address.css';
import office from '../images/ss.png'
import factory from '../images/factory.jpg'
const Address = () => {
    return (
        <div>
            <div className="office container">
                <h1 className='office-title py-5 text-center fw-bold'>Hitacool <span className='dhaka'> Dhaka </span>Office</h1>
                <div className="row align-items-center">
                    <div className="office-img col-md-6">
                        <img className='img-fluid' src={office} alt="office"/>
                    </div>
                    <div className=" col-md-6">
                        <div className=''>
            <h2 className='office-text'><i class="fa fa-map-marker fs-3"></i><span> House 428(1st Floor), Road 30, <br />
Mohakhali DOHS, <br /></span>  Dhaka 1212, <br /> Bangladesh</h2>
        </div>

                    </div>
                </div>

            </div>
            <div className="factory container">
                <h1 className='factory-title pb-5 text-center fw-bold'>Hitacool <span className='Factory'> Manufacturing </span>Factory</h1>
                <div className="row align-items-center">
                    <div className="office-img col-md-6">
                        <img className='img-fluid' src='https://i.ibb.co/FgLLcxJ/257199163-1019504365572528-3972415637721444838-n.png' alt="factory"/>
                    </div>
                    <div className=" col-md-6">
                        <div className=''>
            <h2 className='factory-text'><i class="fa fa-map-marker fs-3"></i><span> 130, Khumira, <br />
Pirojpur Sadar, <br /></span>  Pirojpur, 8500 <br /> Bangladesh</h2>
        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Address;