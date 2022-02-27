import React from 'react'
import useForm from './useForm'
import validationInfo from './validatesInfo';

export const ResearchSignin = ({ submitForm },props) => {

    const {handleChange, values, handleSubmit, errors} = useForm( submitForm, validationInfo);

    return (
        <div id='signup' className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Research Organization! <br /> Login to your account</h1> 
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Research Organization ID
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
                    Create an account? <a href="/facility-signup">
                        here
                    </a>
                </span>
            </form>
        </div>
    )
}

export default ResearchSignin