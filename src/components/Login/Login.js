import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>

                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='' required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-john? <Link className='form-link' to='/signup'>Create a new account</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;