import React from 'react';
import './EachExecutive.css'
import ceo from '../../images/ceo.png'
import md from '../../images/md.png'
import dg from '../../images/dg.png'
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