import React, {useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Shop from './Shop';
import SelfContained from '../Self-contained/Self-Contained/SelfContained';
// ..
AOS.init();
const MainShop=() => {
    const [toggle, setToggle]=useState(true);
    return (
        <div>
            <div className="toggle text-center m-0">
                <button className={`mx-4 fs-2 ${toggle ? "active" : "deactive"}`} onClick={()=>setToggle(true)}>Split Type AC</button>
                <button className={`mx-4 fs-2 ${!toggle ? "active" : "deactive"}`}onClick={()=>setToggle(false)}>Self-Contianed Type AC</button>
            </div>
            {
                toggle? <div>
                    <h1 className='text-center my-5 fw-bold product-title'>Split Type <span id='products-title'> AC Products</span></h1>
            <div data-aos="fade-up"><Shop></Shop></div>
             <h1 className='text-center my-5 fw-bold product-title'>Self-Contained Type <span id='products-title'> AC Products</span></h1>
            <div data-aos="fade-up"><SelfContained></SelfContained>
        </div>
                </div>:<div>
                        <h1 className='text-center my-5 fw-bold product-title'>Self-Contained Type <span id='products-title'> AC Products</span></h1>
            <div data-aos="fade-up"><SelfContained></SelfContained>
        </div>
                    <h1 className='text-center my-5 fw-bold product-title'>Split Type <span id='products-title'> AC Products</span></h1>
            <div data-aos="fade-up"><Shop></Shop></div>

        </div>
            }



        </div>
    );
};

export default MainShop;