import React from 'react';
import { Link, useParams } from "react-router-dom";
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div className='m-5'>
            <PageTitle title={'Detail'}></PageTitle>
            <h1>Service detail: {serviceId}</h1>
            <div>
                <Link to={'/checkout'}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;