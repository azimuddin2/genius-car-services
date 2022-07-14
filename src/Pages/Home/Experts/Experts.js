import React from 'react';
import Expert from '../Expert/Expert';
import './Experts.css';

import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';

const experts = [
    {
        id: 1,
        name: 'Will Smith',
        img: expert1,
        job: 'CEO Autolane'
    },
    {
        id: 2,
        name: 'Chris Rock',
        img: expert2,
        job: 'Vehicle Inspector'
    },
    {
        id: 3,
        name: 'Harold Johnson',
        img: expert3,
        job: 'Car Salesman'
    },
    {
        id: 4,
        name: 'Messy Vai',
        img: expert4,
        job: 'Car Wrapper'
    },
]

const Experts = () => {
    return (
        <div id='experts' className='container mb-5'>
            <h1 className='experts-title'>Our Experts</h1>
            <div className='experts-container'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;