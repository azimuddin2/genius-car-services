import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import OrderShow from '../OrderShow/OrderShow';
import { Table } from 'react-bootstrap';
import './OrderHistory.css';


const OrderHistory = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://whispering-eyrie-11525.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                    toast.error('Google account request failed with status code 403. Please gmail account try');
                }
            }
        }
        getOrders();
    }, [user])

    return (
        <div className='my-5 container'>
            <h2>Total order: {orders.length}</h2>
            <Table responsive="sm md"  striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th className='text-center'>Payment</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <OrderShow
                            key={order._id}
                            order={order}
                            index={index}
                        ></OrderShow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default OrderHistory;