import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import addService from '../../images/add-service.png';
import { toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://whispering-eyrie-11525.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Added Successful')
            })
    }

    return (
        <div className='container form-container'>
            <PageTitle title={'Add'}></PageTitle>
            <div className='image-part'>
                <img className='add-image w-100' src={addService} alt="" />
            </div>
            <div className='p-5 shadow-sm rounded form-part'>
                <h1 className='text-primary fs-2 text-gradient mb-4'>Please Add a service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Service Name' {...register("name", { required: true, maxLength: 20 })} required />
                    <input placeholder='Photo URL' type='text' {...register("img")} required />
                    <input placeholder='Price' type="number" {...register("price")} required />
                    <textarea placeholder='Description' {...register("description")} required />

                    <input className='btn btn-primary w-100 fs-5' type="submit" value={'Add service'} />
                </form>
            </div>
        </div>
    );
};

export default AddService;