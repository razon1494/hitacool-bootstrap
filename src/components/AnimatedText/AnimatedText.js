import React from 'react';
import './AnimatedText.css'
const AnimatedText=() => {
    const bannar = 'https://i.ibb.co/19yyhqg/ac.png'
    return (
        <div className="bannar-container">
        <div className='container bannar-container'>
            <div className="main-bannar row">
<div className="d-md-flex my-5 order-md-first align-items-center justify-content-center col-md-5 col-12 mx-5">
<div className="writing-part">


                        <h1 className='main-title'>HITACOOL <span className='arifur' >Private Ltd.</span></h1>
                        <p className='small-title'>Wholesale AC seller</p>
        <div className="wrapper">
            {/* <div className="static-text fs-1">I'm a</div> */}
            <ul className="dynamic-texts fs-1">
                  <li><span className='fs-1'>Split Type AC</span></li>
                  <li><span className='fs-1'>Self Contained Ac</span></li>
                  <li><span className='fs-1'>Chiller Type AC</span></li>
                  <li><span className='fs-1'>Ductless Mini AC</span></li>
            </ul>
                        </div>
                        <br />

   <a href="#contact">    <button class="my-3 button1 button-62">Contact Us</button></a>
</div></div>
                <div className="img-part col-md-6 col-12 order-first ">
                    <img className='img-fluid my-5 my-img' src={bannar} alt="" />
                </div>
            </div>

        </div></div>
    );
};

export default AnimatedText;