import { Button,Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
     <Container className='container'>
     <h1>
       LOGIN
     </h1>
     <Form className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <FontAwesomeIcon className='icon' icon={faUser} />
    <Form.Control className='input' type="email" placeholder="User name / Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <FontAwesomeIcon className='icon' icon={faLock} />
    <Form.Control className='input' type="password" placeholder="Password" />
  </Form.Group>
  <Button className='login' variant="primary" type="submit">
    SUBMIT
  </Button>
</Form>

     </Container>
    </div>
  );
}

export default App;
