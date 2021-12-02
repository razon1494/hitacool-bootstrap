import React, {useState} from 'react';
import './ProductDetails.css';
import ac from '../data';
import Swal from 'sweetalert2'
import {useParams} from 'react-router';
import {Col, FloatingLabel, Form, Offcanvas, Row, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm, ValidationError } from '@formspree/react';
import ModalForm from './ModalForm';
import ContactUs from '../components/ContactUs/ContactUs';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const ProductDetails=() => {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const [open, setOpen] = React.useState(false);

  const params=useParams();
  const [state, handleSubmit]=useForm("xdobnjol");


    if (state.succeeded) {
      Swal.fire(
  'Thank You!',
  'We got your response!',
        'success'
    );
    document.getElementById('email').value="";
    document.getElementById('name').value="";
    document.getElementById('comment').value="";
  }

    const {id}=params;
    const product=ac.find(product => product.acid==id);
    const {img1, brand, capacity,type,type1,model, system, price, origin, acid, inverter,installation,features,sepcifications}=product;
    console.log(sepcifications);
    for(const spec in sepcifications) {
                    console.log(`${spec} : ${sepcifications[spec]}`);
                }
  return (
    <div>
       <div className=" d-flex justify-content-center align-items-center container  mt-5">

      <div className='container row my-5 align-items-center'>
        <div className="mx-auto col-md-6" >
            <img className='mx-auto d-block' src={img1} alt="" />
        </div>
<div className="product-details-text text-center col-md-6">
          <h2 className='product-detail-title'>{brand} {capacity} {type1} {installation} type ac, <br /> Model {model} </h2>
          <h4 className='details-origin1'>{system}</h4>
            {
                inverter ? <h5 className='details-inverter'>Inverter</h5> : <h5 className='details-inverter'>Non Inverter</h5>
            }
            <h4 className='details-origin1'>Origin: {origin}</h4>
            <p className='details-regular-text'>{type}</p>
            {/* <h5 className='details-price'>Price: &#2547; {price}</h5> */}
          <p className='details-regular-text'>Product Code: {acid+1000}</p>

        <a href="#form">  <button class="button-40 me-4 ">
  Buy Now
</button></a>
            <Link to='/products'><button className='button-40 see'>See All Products</button></Link>

          </div>
        <h2 className='features my-5 text-center'>FEATURES</h2>
         <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center container">
        <ul className='row'>
            {
                features.map(feature =>
                    <li className='feature-line col-md-4 border border-secondary'>{feature}</li>
                )
          }
          </ul>


          </div>
        <h2 className='spec features text-center my-5'>SPECIFICATIONS</h2>
        <div className="mx-5">
<Table responsive className='specs'>
  <thead>
    <tr>
      <th>#</th>
                        <th>Spec</th>
                        <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
        <td>Phase</td>
        <td>{sepcifications.Phase}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Capacity</td>
        <td>{sepcifications.Capacity}</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Total Input</td>
        <td>{sepcifications.TotalInput}</td>
                    </tr>
                    <tr>
      <td>4</td>
        <td>Total Amperes</td>
        <td>{sepcifications.TotalInput}</td>
    </tr>
    <tr>
      <td>5</td>
      <td>EER</td>
        <td>{sepcifications.EER}</td>
    </tr>
    <tr>
      <td>6</td>
      <td>COP</td>
        <td>{sepcifications.COP}</td>
                    </tr>
                    <tr>
      <td>7</td>
        <td>Starting Current</td>
        <td>{sepcifications.StartingCurrent}</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Air Flow</td>
        <td>{sepcifications.AirFlow}</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Dehumidifying Capacity</td>
        <td>{sepcifications.DehumidifyingCapacity}</td>
                    </tr>
                    <tr>
      <td>10</td>
        <td>Pipe Size</td>
        <td>{sepcifications.PipeSize}</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Dimension Indoor</td>
        <td>{sepcifications.DimensionIndoor}</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Dimension Outdoor</td>
        <td>{sepcifications.DimensionOutdoor}</td>
                    </tr>

    <tr>
      <td>13</td>
      <td>Weight Indoor</td>
        <td>{sepcifications.WeightIndoor}</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Weight Outdoor</td>
        <td>{sepcifications.WeightOutdoor}</td>
    </tr>
  </tbody>
</Table>
        </div>
        <h2 className='delivery-title my-4'>Delivery terms & Conditions</h2>
        <p className='delivery-p'>* Delivery From Ready Stock at Dhaka, Bangladesh</p>
        <p className='delivery-p'>* Delivery will be processed within 3-5 days of payment.</p>
        <p className='delivery-p'>* Self Collection from our store at Mogbazar, Dhaka</p>
        <p className='delivery-p'>* 100% Advance payment (cash/check) before delivery</p>
        <p className='delivery-p'>* Contact Person: Engr. Md. Mizanur Rahman (+88-01971-321446)</p>
      </div>
        {/* ******************************************** */}

      </div>
      <ContactUs
        model={model}
        type1={type1}
        acid={acid}
      ></ContactUs>

    </div>
    );
};

export default ProductDetails;