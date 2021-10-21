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
        <div className='container'>
            <h1 className='text-center executive-title m-5 fw-bold'>Our Executive Body</h1>
            <div className="row g-4 justify-content-center">
            {
                executives.map(executive => <EachExecutive
                    key={executive.key}
                    executive={executive}
                ></EachExecutive>)
                }
            </div>
        </div>
    );
};

export default Executive;