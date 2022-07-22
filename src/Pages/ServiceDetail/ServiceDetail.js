import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])

    return (
        <div className='m-5'>
            <PageTitle title={'Detail'}></PageTitle>
            <h1>Service detail: {serviceId}</h1>
            <img src={service.img} alt="" />
            <h3>{service.name}</h3>
            <p>price: ${service.price}</p>
            <p>{service.description}</p>
            <div>
                <Link to={'/checkout'}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;