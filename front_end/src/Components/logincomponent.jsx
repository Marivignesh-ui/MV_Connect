import React from 'react';
import { TextField,Button } from '@material-ui/core';
import {Link,useHistory} from 'react-router-dom';

export default function Login() {
    let history = useHistory();
    function gotocall(){
        let condition=prompt();
        console.log(condition,typeof(condition));
        if(condition==='true') {
            history.push('/call');
        } else {
            console.log("not allowed")
        }
    }
    return (
        <div className="logincontainer">
           <TextField id="standard-basic" margin="normal" variant="outlined" label="username" fullWidth/> 
           <TextField id="password-input" margin="normal" variant="outlined" label="Password" type="password" fullWidth/>
           <Button variant="contained" margin="normal" color="primary" style={{display:'block'}} onClick={gotocall}>Login</Button>
           <p style={{margin:'10px 10px 10px 0px'}}>Don't have an account?</p>
           <Link to='/signup'>Register</Link>
        </div>
    )
}
