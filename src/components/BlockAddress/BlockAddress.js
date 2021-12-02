import React from 'react';
import './BlockAddress.css'
const BlockAddress = () => {
    return (
        <div className='blockaddress'>
            <div className=" d-flex flex-column flex-md-row justify-content-between align-items-center container  mt-5 py-4">
                <div className="dhaka-office text-center">
                    <h2>Our Dhaka Office</h2>
                    <p>House 428(1st Floor), Road 30,Mohakhali DOHS,
                        <br /> Dhaka 1212,Bangladesh</p>
                    <p>Contact: +88-01971-321446</p>
                </div>
                <div className="dhaka-office text-center">
                    <h2>Our Manfacturer Factory</h2>
                    <p>130, Khumira,Pirojpur Sadar, <br />
                        Pirojpur, 8500,Bangladesh</p>
                    <p>Contact: +88-01971-321446</p>
                </div>
             </div>
        </div>
    );
};

export default BlockAddress;