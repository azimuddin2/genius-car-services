import React from 'react';
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h1>Service detail: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;