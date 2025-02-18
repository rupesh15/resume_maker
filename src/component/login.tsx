// src/App.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col  className="d-flex justify-content-center">
        <form className='border border-1 border-dark p-5 inputbox_background'>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Email</span>
            <input type='email' className='form-control' placeholder='Email'/>
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Name</span>
            <input type='email' className='form-control' placeholder='Name'/>
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>{'\u{1F4F1}'}</span>
            <input type='number' className='form-control' placeholder='Phone no.'/>
          </div>
         <button type='submit' className='btn btn-primary me-5'>
             submit
         </button>
         <button type='reset' className='btn btn-clear'>
             Clear
         </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
