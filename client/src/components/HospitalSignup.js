import React from 'react'
import useForm from './useForm'
import validationInfo from './validatesInfo';

export const HospitalSignup = ({ submitForm },props) => {

    const {handleChange, values, handleSubmit, errors} = useForm( submitForm, validationInfo);

    return (
        <div id='signup' className='form-content-right form-signup'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Hospital Signup <br /> Create your account</h1> 
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Hospital ID
                    </label>
                    <input id='username' type="text" className='form-input' name='username' placeholder='Enter the Username' value={values.username} onChange={handleChange} />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input id='email' type="email" className='form-input' name='email' placeholder='Enter the Email ' value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input id='password' type="password" className='form-input' name='password' placeholder='Enter the password ' value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                        Confirm Password
                    </label>
                    <input id='password2' type="password" className='form-input' name='password2' placeholder='Confirm password ' value={values.password2} onChange={handleChange}/>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Sign Up
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href="/signin">
                        here
                    </a>
                </span>
            </form>
        </div>
    )
}

export default HospitalSignup