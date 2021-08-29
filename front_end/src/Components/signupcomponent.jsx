import React from 'react';
import { TextField,Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function Signup() {
    return (
        <div>
            <TextField id="standard-basic" label="username" /> 
            <TextField id="password-input" label="Password" type="password"/>
            <TextField id="password-input" label="Confirm-Password" type="password"/>
            <TextField id="mail" label="E-Mail" type="email" />
            <Button variant="contained" color="primary">Login</Button>
            <p>Already having an account?</p>
            <Link to='/login'><Button href="#text-buttons" color="primary">Login</Button></Link>
        </div>
    )
}
