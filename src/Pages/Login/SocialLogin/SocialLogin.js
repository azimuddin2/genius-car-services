import React from 'react';
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (googleError || githubError) {
        errorElement = (
            <div>
                <p className='text-danger text-center'>Error: {googleError?.message} {githubError?.message}</p>
            </div>
        );
    }

    if (googleLoading || githubLoading) {
        return <Loading></Loading>
    }

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='or-border'></div>
                <p className='mt-3 p-2'>Or</p>
                <div className='or-border'></div>
            </div>
            {errorElement}
            <div className='text-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn border rounded-pill mb-3 social-login'>
                    <img src={google} alt="" />
                    <span className='ms-4'>Continue with Google</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn border rounded-pill social-login'>
                    <img src={github} alt="" />
                    <span className='ms-4'>Continue with GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;