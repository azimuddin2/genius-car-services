import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://whispering-eyrie-11525.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
            <h1 className='services-title'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;