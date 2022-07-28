import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import login from '../../../images/login.png';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import useToken from '../../../hooks/useToken';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (error) {
        errorElement = (
            <p className='text-danger text-center'>Error: {error?.message}</p>
        );
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (agree) {
            await signInWithEmailAndPassword(email, password);
        }
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else {
            toast.error('Please enter your email address')
        }
    }

    return (
        <div className='container form-container'>
            <PageTitle title={'Login'}></PageTitle>
            <div className='image'>
                <img className='login-image' src={login} alt="" />
            </div>
            <div className='p-5 shadow rounded'>
                <h2 className='text-primary text-gradient mb-4'>Please Login</h2>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type={showPassword ? "text" : "password"} placeholder="Password" required />
                        <p className='m-2 me-3'
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ position: 'absolute', top: '0', right: '0', cursor: 'pointer' }} >
                            {
                                showPassword ?
                                    <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                                    :
                                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                            }
                        </p>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={() => setAgree(!agree)}
                            className={agree ? 'text-primary' : 'text-danger'}
                            type="checkbox" label="Remember Me" />
                        <p className='text-center fs-6'> <Link to={'/forgot-password'} onClick={resetPassword}>Forgot Password</Link></p>
                    </Form.Group>

                    <Button
                        disabled={!agree}
                        className='w-100 fs-5'
                        variant="primary" type="submit">Log in </Button>
                </Form>
                <p className='text-center fs-6 my-3'>New to Genius Car? <Link to={'/register'}>Register now</Link></p>
                {errorElement}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;