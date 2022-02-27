import React, { useState } from 'react'
import useForm from './useForm'
import validationInfo from './validatesInfo';
import { useNavigate } from "react-router-dom";

var Result = {}

export const FormSignin = ({ submitForm, props, verify }) => {

    const {handleChange, values, handleSubmit, errors, access, result} = useForm( submitForm, validationInfo, props, verify);
    let navigate = useNavigate();
    Result = result

    return ( result,
        <>
        {access ? [
            <div>
                { navigate('/user-home') }
            </div>
         ] : [
            <div id='signup' className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Greatday! <br /> Login to your account</h1> 
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input id='username' type="text" className='form-input' name='username' placeholder='Enter the Username' value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input id='password' type="password" className='form-input' name='password' placeholder='Enter the password ' value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Login
                </button>
                <span className='form-input-login'>
                    Create an account? <a href="/signup">
                        here
                    </a>
                </span>
            </form>
        </div> ]
    }
    </>
    )
}

export const FormResult = () => {
    return Result
}

export default FormSignin