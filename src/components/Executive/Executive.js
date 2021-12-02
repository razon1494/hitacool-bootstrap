import React, {useEffect, useState} from 'react';
import EachExecutive from '../EachExecutive/EachExecutive';
import './Executive.css'
const Executive=() => {
    const [executives, setExecutives]=useState([]);
    useEffect(() => {
        fetch('./executive.JSON')
            .then(res => res.json())
            .then(data => setExecutives(data));
    }, []);
    console.log(executives);

    return (
        <div className='executive-container'>
             <h1 className='text-center fw-bold my-5 executive-title'>HITACOOL <span id='executive-title-span'>   EXECUTIVE PANEL</span> </h1>
        <div className='container'>

            <div className="row g-4 justify-content-center">
            {
                executives.map(executive => <EachExecutive
                    key={executive.key}
                    executive={executive}
                ></EachExecutive>)
                }
            </div>
        </div></div>
    );
};

export default Executive;