import React from 'react';
import ac2 from '../../../data2'
import Ac2Card from '../Ac2Card/Ac2Card';
const SelfContained=() => {

    console.log(ac2);
    return (
        <div className='container'>
            {/* <h2 className='text-center my-5 fw-bold product-title'>Our Self Contained Ac's</h2> */}
            <div className="products row justify-content-center">
            {
                ac2.map(ac => <Ac2Card
                    key={ac.acid}
                    ac={ac}
                ></Ac2Card>)
            }
            </div>
            </div>
    );
};

export default SelfContained;