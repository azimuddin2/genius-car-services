import React from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../hooks/useService';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import order from '../../images/order.png';
import './Order.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = () => {
    const { serviceId } = useParams();
    const [service] = useService(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            serviceId: serviceId,
            service: service.name,
            price: service.price,
            name: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('https://whispering-eyrie-11525.herokuapp.com/order', order)
            .then(response => {
                const {data} = response;
                if(data.insertedId){
                    toast.success('Your order is successful');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='container form-container'>
            <PageTitle title={'Order'}></PageTitle>
            <div className='image-part'>
                <img className='order-image w-100' src={order} alt="" />
            </div>
            <div className='p-5 shadow-lg rounded-3 form-part'>
                <h1 className='text-primary fs-2 text-gradient mb-4'>Please Order</h1>
                <Form onSubmit={handlePlaceOrder}>
                    <Form.Group className="mb-3">
                        <Form.Control title='Service Name' type="text" name='service' value={service.name} placeholder="Service Name" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control title='Service Price' type="text" name='price' value={service.price} placeholder="Service Price" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='name' value={user?.displayName} placeholder="Name" readOnly disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="email" name='email' value={user?.email} placeholder="Email" readOnly disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='address' placeholder="Address" autoComplete='off' required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="text" name='phone' placeholder="Phone" autoComplete='off' required />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">Order</Button>
                </Form>
            </div>
        </div>
    );
};

export default Order;