import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { img, name, job } = expert;
    return (
        <div className='expert'>
            <img src={img} alt="" />
            <div className='expert-information shadow-sm'>
                <h3>{name}</h3>
                <p>{job}</p>
            </div>
        </div>
    );
};

export default Expert;