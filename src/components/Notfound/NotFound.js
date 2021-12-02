import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='not-found' >
            <div className="container my-5">
            <h1 id='notfound' >Page Not Found</h1>
            <Link to='/'>
                <button className='go-btn'>Go Back To Home</button>
            </Link></div>
        </div>
    );
};

export default NotFound;