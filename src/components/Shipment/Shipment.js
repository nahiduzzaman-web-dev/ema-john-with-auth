import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNameBlur = e => {
        setName(e.target.value);
    }
    const handleAddressBlur = e => {
        setAddress(e.target.value);
    }
    const handlePhoneBlur = e => {
        setPhone(e.target.value);
    }

    const handleCreateUser = e => {
        e.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Shipping Information</h3>

                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name='email' id='' required style={{ backgroundColor: 'lightcyan', outline: 'none' }} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name='phone-number' id='' required />
                    </div>
                    <p style={{ color: 'red' }}><small>
                        {error}
                    </small></p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

            </div>

        </div>
    );
};

export default Shipment;