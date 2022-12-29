import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { url } from '../App';

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("")
  let navigate = useNavigate()

  let handleLogin = async () => {
    try{
      let res = await axios.post(`${url}/users/login`, {
        email,
        password
      })
      if (res.status === 200) {
  
        // console.log(res.data)
        alert(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        navigate('/dashboard')
      }
      else {
        alert(res.data.message)
      }
    }
    catch(error){
      console.log(error)
      alert(error.response.data.message)
    }

  }

  return <div className='container'>
    <div className='row'>
      <h2 className=''>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={() => handleLogin()}>
          Login
        </Button>
      </Form>


    </div>
  </div>

}

export default Login