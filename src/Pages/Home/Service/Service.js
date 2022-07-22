import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, img, name, price, description } = service;

    const navigate = useNavigate();

    const handleServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <button onClick={() => handleServiceDetail(_id)} className='btn btn-primary'>
                    <span className='me-2'>Book Now</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Service;