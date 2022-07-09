import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import login from '../../../images/login.png';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

    return (
        <div className='container form-container'>
            <div>
                <img className='login-image' src={login} alt="" />
            </div>
            <div className=' p-5 shadow rounded'>
                <h2 className='text-primary text-gradient mb-4'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='w-100 fs-5' variant="primary" type="submit">Log in </Button>
                </Form>
                <p className='text-center fs-6 my-3'>New to Genius Car? <Link to={'/register'}>Register now</Link></p>
            </div>
        </div>
    );
};

export default Login;