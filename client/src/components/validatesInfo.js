import React from 'react';
export default function validatesInfo(values) {
    let errors = {}

    if(!values.username) {
        errors.username = "Username Required"
    }
    if(!values.phonenumber) {
        errors.phonenumber = "Phone Number Required"
    }

    if(!values.email) {
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email Invalid"
    }
    if (!values.password) {
        errors.password = "Password Required"
    } else if (values.password.length < 4) {
        errors.password = "Password needs to be 4 char or more"
    }

    if (!values.password2) {
        errors.password2 = "Password Required"
    } else if (values.password2 != values.password) {
        errors.password2 = "Password do not match"
    }

    return errors;
}