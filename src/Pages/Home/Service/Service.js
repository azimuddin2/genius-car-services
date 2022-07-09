import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, price, description } = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <button className='btn btn-primary'>
                    <span className='me-2'>Book Now</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Service;