import React from 'react';
import Swal from 'sweetalert2'
import { useForm, ValidationError } from '@formspree/react';
import {Button, Col, FloatingLabel, Form, Row} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import './ContactUs.css';
import {useState} from 'react';
const ContactUs=({model, type1, acid}) => {
  const [state, handleSubmit]=useForm("xdobnjol");
  let isHome=false;
/*   if(model==='n/a') {
    setIsHome(true);
} */
  const a=model;
  if(a==='n/a') {
    isHome=true;
  }
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


    return (
        <div className='contact-us-container container p-3 border rounded-3 my-5'>
        <h2 className='text-center contact-title' >Contact Us</h2>
        {/* responsive contact us form */}

 <Form className='container' onSubmit={handleSubmit}>

  {isHome || <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label htmlFor="product">Product Name</Form.Label>
      <Form.Control id="product"
        name="product" type="text" value={type1+' type Model:'  + model +' ACID: '+ acid} readOnly/>
    </Form.Group>
  </Row>}
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label htmlFor="email">Email</Form.Label>
      <Form.Control id="email"
        name="email" type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label htmlFor='name'>Name</Form.Label>
    <Form.Control placeholder="Name"  id="name"
        name="name" type="name"/>
  </Form.Group>

<FloatingLabel htmlFor='comment' controlId="floatingTextarea2" label="Comments">
            <Form.Control
              id="comment"
        name="comment" type="text"
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Button type='submit' disabled={state.submitting} variant="success" className='my-3'>
    Submit
  </Button>
</Form>

</div>
    );
};

export default ContactUs;