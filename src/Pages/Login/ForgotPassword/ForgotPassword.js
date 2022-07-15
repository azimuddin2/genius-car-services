import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <div>
            <div className='shadow rounded form'>
                <h2 className='text-primary text-gradient'>Forgot Password?</h2>
                <p className='fs-5'>Enter your email to reset password</p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>

                    <Button className='w-100 fs-5' variant="primary" type="submit">Continue</Button>
                </Form>
                <p className='text-center fs-6 my-3'>Remember your password? <Link to={'/login'}>Try logging in</Link></p>
            </div>
        </div>
    );
};

export default ForgotPassword;