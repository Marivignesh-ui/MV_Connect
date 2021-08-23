import React,{useContext,useState} from 'react';
import { Button,TextField,Grid,Typography,Paper } from '@material-ui/core';
import CopytoClipboard from 'react-copy-to-clipboard';
import {Assignment,Phone,PhoneDisabled} from '@material-ui/icons';

import { SocketContext } from '../SocketContext';

const Options = ({children}) => {
    const {me,callAccepted,name,setName,callEnded,leaveCall,callUser}=useContext(SocketContext);
    const [idToCall,setIdToCall] = useState('');
    
    return (
        <div className="container">
            <Paper elevation={10} className="paper1">
                <form className="root" noValidate autoComplete="off">
                    <Grid container className="gridContainer">
                        <Grid item xs={12} md={6} style={{padding:'20px'}}>
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e)=>setName(e.target.value)} fullWidth />
                            <CopytoClipboard text={me} style={{marginTop:"20px"}}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    Copy Your ID
                                </Button>
                            </CopytoClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} style={{padding:'20px'}}>
                            <Typography gutterBottom variant="h6">Make a call</Typography>
                            <TextField label="ID to call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ?(
                                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} style={{marginTop:"20px"}}>
                                    Hang Up
                                </Button>
                            ):(
                                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={()=>callUser(idToCall)} style={{marginTop:"20px"}}>
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
            
        </div>
    );
}

export default Options;