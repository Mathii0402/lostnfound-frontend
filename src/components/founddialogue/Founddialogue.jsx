import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Axios from 'axios';
export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
    setOpen(false);

  };
  const handleClose = () => {
    setOpen(false);
    setOpen2(false)
  };

    const [enteredName, setEnteredName] = useState('');
    const [enteredNumber, setEnteredNumber] = useState('');
    const [enteredPlace, setEnteredPlace] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
   

    const onNameChangehandler = (event) => setEnteredName(event.target.value);
    const onNumberChangehandler = (event) => setEnteredNumber(event.target.value);
    const onPlaceChangehandler = (event) => setEnteredPlace(event.target.value);
    const onAddressChangehandler = (event) => setEnteredAddress(event.target.value);


    const onFormSubmit = (event) => { 
        event.preventDefault();
       
        const found_details= {
            name: enteredName,
            number: enteredNumber,
            place:enteredPlace,
            address:enteredAddress
        }
        Axios.post("https://lostnfound-api-backend.onrender.com/api/v1/found",
            found_details
    )
        .then(res=>console.log("posted",res)).catch(err=> console.log("errorr",err));
        setEnteredName("");
        setEnteredAddress("");
        setEnteredPlace("");
        setEnteredNumber("");
    setOpen2(false);
      }
  return (
    <div>

            <button onClick={handleClickOpen}>Found? 🔎</button>
       
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Have you found this object"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClickOpen2} autoFocus>
            Found?
          </Button>
        </DialogActions>
      </Dialog>
      {/* -------------- */}
      <Dialog
        open={open2}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" >
          {"Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText  id="alert-dialog-description">
          <TextField value={enteredName} onChange={onNameChangehandler}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
        <TextField margin="dense" value={enteredNumber} onChange={onNumberChangehandler} fullWidth id="number" label="Mobile number" type="number" varient="standard"/>
        <TextField margin="dense" value={enteredPlace} onChange={onPlaceChangehandler} fullWidth id="placefound" label="Place of Found" type="text" varient="standard"/>
        <TextField margin="dense" value={enteredAddress} onChange={onAddressChangehandler} fullWidth id="address" label="Address" type="text" varient="standard"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onFormSubmit} autoFocus>
                Submit
          </Button>
        </DialogActions>
      </Dialog>
 
    </div>
  );
}