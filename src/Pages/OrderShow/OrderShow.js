import React from 'react';
import { faTrashCan, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OrderShow = ({ order, index }) => {
    const { service, email, phone, price } = order;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{service}</td>
            <td>${price}</td>
            <td className='text-center'>
                <button
                    title='Payment' className='btn btn-warning text-white'>
                    <FontAwesomeIcon icon={faMoneyCheckDollar}></FontAwesomeIcon>
                </button>
            </td>
            <td className='text-center'>
                <button
                    title='Delete' className='btn btn-danger'>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </td>
        </tr>
    );
};

export default OrderShow;