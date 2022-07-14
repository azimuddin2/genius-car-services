import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import register from '../../../images/register.png';


const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    const navigate = useNavigate();

    if(user){
        navigate('/home');
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='container form-container'>
            <div>
                <img className='login-image' src={register} alt="" />
            </div>
            <div className=' p-5 shadow rounded'>
                <h2 className='text-primary text-gradient mb-4'>Please Register</h2>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='w-100 fs-5' variant="primary" type="submit">Register</Button>
                </Form>
                <p className='text-center fs-6 my-3'>Already have a account? <Link to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;