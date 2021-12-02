import React from 'react';

const Details4 = () => {
    return (
        <div>
            <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center container  mt-5">
                <div className="row align-items-center g-5">
                    <div className="col-md-6 order-2">

                        <h2 className=' self-ac-detail-head'>Optimum Matched Choice </h2>
                        <h5 className='detail-h5 fw-bold'>High Temparature Operation</h5>
                        <p className='self-ac-detail-p'>Designed for high outdoor temparatures. This unit garantee reliable operation up to an ambient temperature of 52 degree celcius</p>
                        <h5 className="detail-h5 fw-bold">Quite Operation</h5>
                        <p className='self-ac-detail-p'>Noise and Vibration have been effectively reduced by the adoption of neeew hermetic compressor. The direct driven propeller fan is dynamically balanced to ensure smooth air flow.</p>
                        <h5 className="detail-h5 fw-bold">Easy Maintanace</h5>
                        <p className='self-ac-detail-p'>Easy to install, ready to operate unit ensure rapid and low cost installation. Large service spaces and rapidly removable service panels have been provided for easy maintanance work</p>
                    </div>
                    <div className="col-md-6 order-1">
                        <img className='img-fluid' src="https://i.ibb.co/hRPPc89/extra2.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Details4;