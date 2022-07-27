import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from "react-router-dom";
import useService from '../../hooks/useService';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useService(serviceId);

    return (
        <div className='my-5 p-5 service-detail shadow rounded'>
            <PageTitle title={'Detail'}></PageTitle>
            <h2 className='text-primary mb-4'>SERVICE DETAIL</h2>
            <img src={service.img} alt="" />
            <div className='mt-4'>
                <h3>{service.name}</h3>
                <p>price: ${service.price}</p>
                <p>{service.description}</p>
            </div>
            <div>
                <Link to={`/order/${serviceId}`}>
                    <button className='btn btn-primary'>
                        <span className='me-2'>Proceed Checkout</span>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;