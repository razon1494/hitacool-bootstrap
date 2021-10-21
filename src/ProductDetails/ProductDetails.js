import React from 'react';
import './ProductDetails.css';
import ac from '../data';
import {useParams} from 'react-router';
import {Table} from 'react-bootstrap';
const ProductDetails=() => {
    const params=useParams();
    const {id}=params;
    const product=ac.find(product => product.acid==id);
    const {img1, brand, capacity,type,type1,model, system, price, origin, acid, inverter,installation,features,sepcifications}=product;
    console.log(sepcifications);
    for(const spec in sepcifications) {
                    console.log(`${spec} : ${sepcifications[spec]}`);
                }
    return (
      <div className='container'>
        <div className="mx-auto">
            <img className='mx-auto d-block img-fluid' src={img1} alt="" />
        </div>
<div className="product-details-text text-center">
          <h2 className='product-detail-title'>{brand} {capacity} {type1} {installation} type ac, <br /> Model {model} </h2>
          <h3 className='details-origin'>{system}</h3>
            {
                inverter ? <h5 className='details-inverter'>Inverter</h5> : <h5 className='details-inverter'>Non Inverter</h5>
            }
            <h4 className='details-origin'>Origin: {origin}</h4>
            <p className='details-regular-text'>{type}</p>
            <h5 className='details-price'>Price: &#2547; {price}</h5>
          <p className='details-regular-text'>Product Code: {acid+1000}</p>
          </div>
        <h2 className='features my-5 text-center'>FEATURES</h2>
        <ul className=''>
            {
                features.map(feature =>
                    <li className='feature-line'>{feature}</li>
                )
          }
          </ul>
            <h2 className='spec features text-center my-5'>SPECIFICATIONS</h2>
<Table responsive className=' specs'>
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
    );
};

export default ProductDetails;