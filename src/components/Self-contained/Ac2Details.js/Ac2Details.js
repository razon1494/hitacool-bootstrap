import React from 'react';
import {Link, useParams} from 'react-router-dom';
import ac2 from '../../../data2';
import './Ac2Details.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import details1 from './Details1';
import Details1 from './Details1';
import Details2 from './Details2';
import Details3 from './Details3';
import Details4 from './Details4';
import ContactUs from '../../ContactUs/ContactUs';
// ..
AOS.init();
const Ac2Details=() => {
    const params=useParams();
    const {id}=params;
    const product=ac2.find(product => product.acid==id);
    const { brand, model, type, img1,features}=product;
    return (
        <div>
            <h2 className='selfac-title text-center my-4'>{brand} {model} {type} Type AC</h2>


            <div  className="d-flex flex-column flex-md-row justify-content-center align-items-center container mt-0">
                <div className="inverter-img w-50">
                    <img className='img-fluid inverter-img' src={img1} alt="" />
                </div>
                <div className="inverter-text w-50">
                    <h1 className='fw-bold inverter-h1 my-4'>Features</h1>
                    <ul>
                        {
                            features.map(feature => <li className='feature-list-self'>{feature}</li> )
                        }
                    </ul>
                <a href="#contact">  <button className='btn btn-danger my-4 px-3'>Buy Now</button></a>
                </div>


            </div>
            <h2 className='text-center selfac-title'>{model} Special Features</h2>

            <div data-aos='fade-up'> <Details1 model={model}></Details1></div>
            <div data-aos='fade-left'> <Details2 model={model}></Details2></div>
            <div data-aos='fade-right'> <Details3 model={model}></Details3></div>
            <div data-aos='fade-down'> <Details4 model={model}></Details4></div>


            <div id="contact"><ContactUs
                model={model}
                type1={type}
                acid={id}
            ></ContactUs></div>


        </div>
    );
};

export default Ac2Details;


/*
https://i.ibb.co/9qw6B1M/extra1.png
https://i.ibb.co/hRPPc89/extra2.png
https://i.ibb.co/BqzXTWj/extra3.png
https://i.ibb.co/tDxcrkR/extra4.png
*/