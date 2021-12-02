import React from 'react';

const Details3=({model}) => {
    return (
        <div>
            <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center container  mt-5">
                <div className="row align-items-center g-5">
                    <div className="col-md-6 ">

                        <h2 className = 'self-ac-detail-head ' > Energy-Saving Design </h2>
                        <h5 className='fw-bold detail-h5'>Highly Efficient Compressior</h5>
                        <p className='self-ac-detail-p'>
                            Low power input is achieved by specially developed compressior and heat exchanger and their suitable combinations.
                        </p>
                        <h5 className='fw-bold detail-h5'>Condenser</h5>
                        <p className='self-ac-detail-p'>
                            The Adaption of a highly efficient super slit fin coils and inner grooved tube have been applied, to provide a large cooling capacity with low noise.
                        </p>
                        <h5 className='fw-bold detail-h5'>Capacity Control (Dual circuit units)</h5>
                        <p className='self-ac-detail-p'>
                            Each unit is equipped with two or three compressor and two or three independent refrigaration cycles so that one compressior operaiton can reduce the operation cost against a half load of one large compressor.
                        </p>
                    </div>
                    <div className="col-md-6 order-1">
                        <img className='img-fluid' src="https://i.ibb.co/tDxcrkR/extra4.png" alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Details3;