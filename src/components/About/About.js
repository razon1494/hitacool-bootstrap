import React from 'react';
import './About.css'
import inverter from '../../images/inverter split.jpg';
import fixed from '../../images/fixed.jpg';
import ceiling from '../../images/cassette.jpg'
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
const About = () => {
    return (
        <div>
            <h1 className='text-center about-h1-title mt-4'>HITACOOL INDUSTRIES LIMITED</h1>
            <p className='container about-text-p my-5'>Hitacool Industries Limited is the frist authorized Hitachi AC dealer in Bangladesh.All The products are directly imported from the origin country. We Provide the lowest possible price and maintain the best quality service.Our ACs with Tropical Inverter Technology have a unique variable speed tropical compressor that varies its RPM by adjusting the power supply frequency of its tropical compressor. This is achieved by Seamless Cascade Vector DC Inverter System that comes pre-installed with a micro computer, which controls its rotation, providing cooling solutions as per the room’s requirements. Thus, giving it an edge over conventional Inverter ACs. The Stepless Compressor Control feature provides smooth regulation of the compressor speed.</p>

            <div className="inverter-split  d-flex flex-column flex-md-row  justify-content-center align-items-center container mt-5">
                <div className="inverter-text w-50">
                    <h1 className='fw-bold inverter-h1 my-4'>Inverter Split Air Conditioners</h1>
                    <h4 className='inverter-h4'>Inverter ACs can vary the compressor speed to regulate the refrigerant flow which results in less power consumption, maintaining the cooling experience</h4>
                   <Link to='/products'><button className='btn btn-danger my-4'>View Product List</button></Link>
                </div>
                <div className="inverter-img w-50">
                    <img className='img-fluid inverter-img' src={inverter} alt="" />
                </div>


            </div>
            <div className="details-high-effeciency py-4">
                <h2 className='text-center fw-bold mt-5 about-h1 my-4'>High efficiency Inverter Air Conditioners</h2>
                <p className='container about-text-p my-5'>Hitacool Industries Limited is the frist authorized Hitachi AC dealer in Bangladesh.All The products are directly imported from the origin country. We Provide the lowest possible price and maintain the best quality service.Our ACs with Tropical Inverter Technology have a unique variable speed tropical compressor that varies its RPM by adjusting the power supply frequency of its tropical compressor. This is achieved by Seamless Cascade Vector DC Inverter System that comes pre-installed with a micro computer, which controls its rotation, providing cooling solutions as per the room’s requirements. Thus, giving it an edge over conventional Inverter ACs. The Stepless Compressor Control feature provides smooth regulation of the compressor speed.</p>

            </div>
            <div className="inverter-split  d-flex flex-column flex-md-row  justify-content-center align-items-center container mt-5">
                <div className="inverter-img w-50">
                    <img className='img-fluid inverter-img' src={fixed} alt="" />
                </div>
                <div className="inverter-text w-50">
                    <h1 className='fw-bold inverter-h1 my-4'>Fixed Speed Air Conditioners</h1>
                    <h4 className='inverter-h4'>Hitachi Fixed Speed Air Conditioners come with a wide array of features that can deliver a superior cooling experience.</h4>
                   <Link to='/products'><button className='btn btn-danger my-4'>View Product List</button></Link>
                </div>



            </div>

            <div className="details-high-effeciency py-4">
                <h2 className='text-center fw-bold mt-5 about-h1 my-4'>Stylish Cassette Air Conditioners for your home</h2>
                <p className='container about-text-p my-5'>Hitachi Cassette Air Conditioners come with one way, two way and four way power throw. You can select from our Inverter series and Fixed Speed series for your next cassette air conditioner.It has fabulous features like Fresh Air Intake, Sleep & Timer Control, Dimensional Screw Fan.It has fabulous features like Fresh Air Intake, Sleep & Timer Control, Dimensional Screw Fan. </p>

            </div>
 <div className="inverter-split  d-flex flex-column flex-md-row  justify-content-center align-items-center container mt-5">

                <div className="inverter-text w-50">
                    <h1 className='fw-bold inverter-h1 my-4'>Ceiling ACs</h1>
                    <h4 className='inverter-h4 my-4'>Ceiling mounted high efficiency Air Conditioners for your home and office need.Hitachi Cassette Air Conditioners come with one way, two way and four way power throw. You can select from our Inverter series and Fixed Speed series for your next cassette air conditioner. </h4>
                   <Link to='/products'><button className='btn btn-danger my-4'>View Product List</button></Link>
                </div>
                <div className="inverter-img w-50">
                    <img className='img-fluid inverter-img' src={ceiling} alt="" />
                </div>



            </div>
            <div className="details-high-effeciency py-4">
                <h2 className='text-center fw-bold mt-5 about-h1 my-4'>Stylish Cassette Air Conditioners for your home</h2>
                <p className='container about-text-p my-5 my-4'>With over 80 years of experience, we are confident that our range ductless AC solutions provides households and businesses with the leading climate control technology to create and maintain the perfect indoor environment. Meeting the evolving requirements of our clients means that we are constantly innovating our systems, resulting in a collection of elegant and efficient cassette air conditioners that are designed to adapt to you and the spaces that they inhabit. We cater for all types of projects and offer an extensive range of cassette aircon solutions so that you can find the system right for the job.</p>

            </div>

        </div>
    );
};

export default About;