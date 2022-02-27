import React from 'react'
import { useState } from 'react'
import FormSignup from './FormSignup'
import { Navigation } from './navigation'
import { Contact } from "./contact";
import FormSignin from './FormSignin'
import FormSuccess from './FormSuccess'
import HospitalSignin from './HospitalSignin';
import HospitalSignup from './HospitalSignup';
import OrganizationSidebar from './OrganizationSidebar';
// import { Navigate } from "react-router-dom";

export const Form = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }

    function refresh() {
        window.location.reload(false);
        // <Navigate to="/" />
    }

    return (
        <>
        <Navigation />

        {props.data ?
        [props.data.user === "user" ?
        "Loading" :
        <OrganizationSidebar data={props.data} />
        ]:"loading"}

        <div className='form-container'>
            <button className='close-btn' onClick={refresh}>x</button>
                <div className='form-content-left'>
                {props.data 
                ? [
                    (props.data.user === "user") ? 
                    <img src="./img/form/img-4.svg" alt="spaceship" className='form-img' />
                    : <img src="./img/form/img-1.svg" alt="spaceship" className='form-img' />
                ]:"loading"}
                    
                </div>

                {props.data 
                ? [
                    props.data.active 
                        ? [
                            (props.data.user === "user") ?
                            [(!isSubmitted) ? (<FormSignup submitForm={submitForm} props={props} verify={0} />) : (<FormSuccess />)] :
                            [(!isSubmitted) ? (<HospitalSignup submitForm={submitForm} />) : (<FormSuccess />)]
                        ] : [
                            (props.data.user === "user") ?
                            [(!isSubmitted) ? (<FormSignin submitForm={submitForm} props={props} verify={1} />) : (<FormSuccess />)] :
                            [(!isSubmitted) ? (<HospitalSignin submitForm={submitForm} />) : (<FormSuccess />)]
                        ],
                        // [ (props.data.active === true & props.data.user === "user") && 
                        //     [
                        //         (!isSubmitted) ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess />)
                        //     ]
                        // ],
                        // [ (props.data.active === false & props.data.user === "user") && 
                        //     [
                        //         (!isSubmitted) ? (<FormSignin submitForm={submitForm} />) : (<FormSuccess />)
                        //     ]
                        // ],
                        // [ (props.data.hospital === true & props.data.user === "hospital") && 
                        //     [
                        //         (!isSubmitted) ? (<HospitalSignin submitForm={submitForm} />) : (<FormSuccess />)
                        //     ]
                        // ],

                ] 
                : 'Loading'}

                
                
        </div>
        <Contact data={props} />
        </>
    )
}

export default Form
