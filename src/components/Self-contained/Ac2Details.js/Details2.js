import React from 'react';

const Details2=({model}) => {
    return (
        <div>
            <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center container  mt-5">
                <div className="row align-items-center g-5">
                    <div className="col-md-6 order-2">

                        <h2 className=' self-ac-detail-head'>Reliable Protection System </h2>
                        <h5 className='detail-h5 fw-bold'>Compressor Protection</h5>
                        <p className='self-ac-detail-p'>Each Compressor is protected with the following components, reverse phase protection, overcurrent protector, internal thermstat, high pressure switch, delay timer. this wide varity of protection devices provides perfect compressor guarding functions, assuring fewer service calls from customer.</p>
                        <h5 className="detail-h5 fw-bold">Fan Motor</h5>
                        <p className='self-ac-detail-p'>The evaporator fan motors are protected with thermal overcurrent relay, and the condenser fan motors are protected with an internal thermostat</p>
                    </div>
                    <div className="col-md-6 order-1">
                        <img className='img-fluid' src="https://i.ibb.co/BqzXTWj/extra3.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details2;