import React from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SignIn = (props) => {

  return (
   <Container className='mt-3 border shadow'> 
    <h1 className='text-center mt-2'>Login</h1>
    <Form>
      <FormGroup className="mb-2 mr-sm-2">
        <Label for="Email" className="mr-sm-2">Email</Label>
        <Input type="email" name="username"  placeholder="Enter your Email" 
          onChange={props.handleChange} 
          value={props.value.username}/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2">
        <Label for="Password" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" placeholder="Enter your Password" 
          onChange={props.handleChange} 
          value={props.value.password}/>
      </FormGroup>
      <Button className='my-2' onClick={event => props.submitClick(event)}>Submit</Button>
    </Form>
    </Container>
  );
}

export default SignIn;