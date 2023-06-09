import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Registration() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundColor: 'Grey'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Jail Guard Officer Registration Form</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='Name' type='text'/>

          <MDBInput wrapperClass='mb-4' label='Your License Number' size='License Number' id='License_Number' type='text'/>

          <MDBInput wrapperClass='mb-4' label='Position' size='Position' id='Position' type='text'/>

          <MDBInput wrapperClass='mb-4' label='Service Firearm Serial Number' size='Firearm Serial Number' id='Firearm_Serial_Number' type='text'/>

          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='Email' type='email'/>


          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Registration;