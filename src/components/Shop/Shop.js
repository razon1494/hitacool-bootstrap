import React from 'react';
import './Shop.css';
import ac from '../../data';


import AcCard from '../AcCard/AcCard';
import SelfContained from '../Self-contained/Self-Contained/SelfContained';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Shop=() => {
    console.log(ac);
    return (
        <div className='container'>

            <div className="products row justify-content-center">
                {
                    ac.map(p =>
                        <AcCard
                            key={p.acid}
                            product={p}
                        ></AcCard>
                    )
                }
            </div>


        </div>
    );
};

export default Shop;