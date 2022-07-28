import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import register from '../../../images/register.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    const navigate = useNavigate();

    let errorElement;
    if (error || updateError) {
        errorElement = (
            <p className='text-danger text-center'>Error: {error?.message} {updateError?.message}</p>
        );
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
    }


    return (
        <div className='container form-container'>
            <PageTitle title={'Register'}></PageTitle>
            <div className='image'>
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

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={() => setAgree(!agree)}
                            className={agree ? 'text-primary' : 'text-danger'}
                            name='terms' id='terms' type="checkbox" label="Accept Genius Car Terms and Conditions" />
                    </Form.Group>

                    <Button
                        disabled={!agree}
                        className='w-100 fs-5'
                        variant="primary" type="submit">Register</Button>
                </Form>
                <p className='text-center fs-6 my-3'>Already have a account? <Link to={'/login'}>Login</Link></p>
                {errorElement}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;