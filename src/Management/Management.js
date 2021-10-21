import React from 'react';
import './Management.css';
import ceo from '../images/ceo.png';
import md from '../images/md.png';
const Management = () => {
    return (
        <div>
            <h1 className='my-4 text-center management-title'> <span className='management-span'>Hitacool</span> Managing Body </h1>
            <div className="ceo">
            <div className="d-flex align-items-center justify-content-center mt-4">
                <img className='management-photo' src={ceo} alt="" />
            </div>
            <h2 className='text-center mt-4 ceo-name'>Lieutenant Colonel Md Mostafizur Rahman</h2>
            <h4 className='text-center mt-4 post'>Chief Executive Officer</h4>
            <h5 className='text-center mt-3 education'>PBGMS, psc BSc Engg, BUET. <br /> Masters in Defence Studies.  PhD (On Going)</h5>
            </div>
            <div className="ceo mt-5">
            <div className="d-flex align-items-center justify-content-center mt-5">
                <img className='management-photo' src={md} alt="" />
            </div>
            <h2 className='text-center ceo-name mt-4'>Md. Mizanur Rahman</h2>
            <h4 className='text-center mt-4 post'>Managing Director</h4>
            </div>


        </div>
    );
};

export default Management;