import React from 'react';
import './Management.css';
import ceo from '../images/ceo.png';
import md from '../images/md.png';
const Management = () => {
    return (
        <div>
            <h1 className='my-4 text-center management-title'> <span className='management-span'>HITACOOL</span> MANAGING BODY</h1>
            <div className="ceo">
            <div className="d-flex align-items-center justify-content-center mt-4">
                <img className='management-photo' src='https://i.ibb.co/S5YHLgc/256864384-870039543709649-8346803169044203096-n.jpg' alt="" />
            </div>
            <h2 className='text-center mt-4 ceo-name'>Lieutenant Colonel Md Mostafizur Rahman</h2>
            <h4 className='text-center mt-4 post'>Chairman</h4>
            <h5 className='text-center mt-3 education'>PBGMS, psc BSc Engg, BUET. <br /> Masters in Defence Studies.  PhD (On Going)</h5>
            </div>
            <div className="ceo mt-5">
            <div className="d-flex align-items-center justify-content-center mt-5">
                <img className='management-photo' src={md} alt="" />
            </div>
            <h2 className='text-center ceo-name mt-4'>Engr. Md. Mizanur Rahman</h2>
            <h4 className='text-center mt-4 post'>Managing Director</h4>
            </div>


        </div>
    );
};

export default Management;