import React from 'react';
import './ProductDetails.css';
import ac from '../data';
import {useParams} from 'react-router';
import {Table} from 'react-bootstrap';
const ProductDetails=() => {
    const params=useParams();
    const {id}=params;
    const product=ac.find(product => product.acid==id);
    const {img1, brand, capacity,type,type1,model, system, price, origin, acid, inverter,features,sepcifications}=product;
    console.log(sepcifications);
    for(const spec in sepcifications) {
                    console.log(`${spec} : ${sepcifications[spec]}`);
                }
    return (
        <div className='container'>
            <img src={img1} alt="" width="400px" />
            <h3>{brand} {capacity} {type1} type ac, Model {model} </h3>
            {
                inverter ? <h5>Inverter</h5> : <h5>Non Inverter</h5>
            }
            <h4>Origin: {origin}</h4>
            <p>{type}</p>
            <h5>Price: &#2547; {price}</h5>
            <p>Product Code: {acid+1000}</p>
            <h2 className='features text-center'>Features</h2>
            {
                features.map(feature =>
                    <li className=''>{feature}</li>
                )
            }
            <h2 className='spec text-center my-5'>Specifications</h2>
<Table responsive>
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