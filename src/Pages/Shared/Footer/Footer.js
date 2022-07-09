import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='bg-dark text-light p-5'>
            <p className='text-center'><small>Copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;