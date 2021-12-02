import React from 'react';

const Details1=({model}) => {
    return (
        <div>
<div className=" d-flex flex-column flex-md-row justify-content-center align-items-center container  mt-5">
                <div className="row align-items-center g-5">
                    <div className="col-md-6 ">

                        <h2 className=' self-ac-detail-head'>Baked Paint Galvanized Steel Panels. </h2>
                        <h5 className='fw-bold detail-h5'>Corrision Resistant Cabinet</h5>
                        <p className='self-ac-detail-p'>The Weather proof characterestics of the panels have been significantly reinforced by the adoption of galvanized steel panel which have been coated with synthetic resin paint through our unique baking process. The Resistant panels ensure long lasting fine appearance and maintenance work has been minimized.</p>
                        <h5 className='fw-bold detail-h5'>Evaporator</h5>
                        <p className='self-ac-detail-p'>
                            The Adaption of a highly efficient super slit fin coils and inner grooved tube have been applied, to provide a large cooling capacity with low noise.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src="https://i.ibb.co/9qw6B1M/extra1.png" alt="" />
                    </div>

                </div>
            </div>
            {/* <hr /> */}
        </div>
    );
};

export default Details1;