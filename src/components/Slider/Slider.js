import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css';
import slider1 from '../../images/ac.png'
import slider2 from '../../images/slider-4.png'
import slider3 from '../../images/office.png'
const Slider=() => {
    return (
        <div className='container'>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption className='carousel1-text'>
      <h3 className='carousel1-title'><span id='cooling'> Cooling </span>&<span id='heating'> Heating </span></h3>
      <p className='carousel1-p'>Faster Cooling, Better Savings, Smooth Heating.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption className='carousel2-text'>
      <h3 className='carousel2-title'>We Have our Own Manufacturer  <span id='factory'>Factory</span> </h3>
      <p className='carousel2-p'>130, Khumira, Pirojpur Sadar,<br/> Pirojpur, Bangladesh</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />
    <Carousel.Caption className='carousel3-text'>
      <h3 className='carousel3-title'>Our<span id='dhaka'> Dhaka </span>Office At</h3>
      <p className='carousel3-p'>House 428(1st Floor), Road 30,<br/> Mohakhali DOHS, Dhaka 1212</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Slider;