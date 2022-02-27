import React from 'react';
import { useState, useEffect } from "react";
import Web3 from 'web3';
import validate from "./validatesInfo";
import {Router,	Routes, Route, Link } from 'react-router-dom';
import { Home } from "./Home";

export const useForm = (callback, validate, props, verify) => {
    const [values, setValues] = useState({
        username: '',
        phonenumber:'',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [access, setAccess] = useState(false)
    const [result, setResult] = useState([])

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };

    const handleSubmit = async(e) => {
        e.preventDefault();

        setErrors(validate(values));

        setIsSubmitting(true);

        // Authentication to smart contract here
        if(verify===0){ 
            const tx_hash = props.formState.auth.methods.register(values.username, values.phonenumber, values.email, values.password).send({from: props.formState.accounts[0]});    
        }
        if (verify===1) {
            const tx_hash = props.formState.auth.methods.login(values.username, values.password).call({from: props.formState.accounts[0]}).then(function(Result) {
                setResult(Result)
                { Result[0]!=="" ? setAccess(true) : setAccess(false) }
            });
        }
    };
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { handleChange, values, handleSubmit, errors, access, result }
};

export default useForm;