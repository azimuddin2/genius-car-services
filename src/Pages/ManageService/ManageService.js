import React from 'react';
import useServices from '../../hooks/useServices';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { faTrashCan, faFilePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ManageService.css';
import { toast } from 'react-toastify';

const ManageService = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://whispering-eyrie-11525.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    toast.success('Delete successful');
                })
        }
    }

    return (
        <div>
            <PageTitle title={'Manage'}></PageTitle>
            <div className='container my-5'>
                {
                    services.map(service => <div className='d-flex align-items-center justify-content-between border mb-3 p-2 rounded manage-service' key={service._id}>
                        <img className='rounded-1' style={{ width: '80px' }} src={service.img} alt="" />
                        <h5 title={service.name}>
                            {
                                service.name.length > 10 ? service.name.slice(0, 10) + '...' : service.name
                            }
                        </h5>
                        <button
                            onClick={() => handleDelete(service._id)}
                            title='Delete' className='btn btn-danger'>
                            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                        </button>
                        <button title='Update' className='btn btn-primary text-white'>
                            <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                        </button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageService;