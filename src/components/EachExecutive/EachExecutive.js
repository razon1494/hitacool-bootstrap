import React from 'react';
import './EachExecutive.css'

import md from '../../images/dg.png'
import dg from '../../images/dg.png'
const ceo = 'https://i.ibb.co/S5YHLgc/256864384-870039543709649-8346803169044203096-n.jpg'
const imgArr=[ceo, md, dg];
const EachExecutive=(props) => {
    const {executive}=props;
    const key=executive.key;
    return (
        <div className='col-md-3 executive-card px-2'>
            <img className='container-fluid executive-img' src={imgArr[key]} alt="photo" />
            <h3 className='executive-name'>{executive.name}</h3>
            <h5 className='executive-post'>{executive.post}</h5>
        </div>
    );
};

export default EachExecutive;