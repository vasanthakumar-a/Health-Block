import React from 'react'
import { Link } from 'react-router-dom';

export const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className='form-success'>
                We have recived your request!
            </div>
            <img src="./img/form/img-4.svg" className='form-img-2' alt="success-image" />
            <Link to='/signin'>
            <button className='form-input-btn success-btn' onClick={'/'}>
                    Login
            </button>
            </Link>
        </div>
    )
}

export default FormSuccess
