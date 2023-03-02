import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Axios from "axios";
import "./Founddialogue.css";
import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
export default function AlertDialog() {
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
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
    setOpen2(false);
  };

  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredPlace, setEnteredPlace] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredObjId, setEnteredObjId] = useState('');
const [color,setColor]=useState();
const [text,setText]=useState('Found?🔎');
  const onNameChangehandler = (event) => setEnteredName(event.target.value);
  const onNumberChangehandler = (event) => setEnteredNumber(event.target.value);
  const onPlaceChangehandler = (event) => setEnteredPlace(event.target.value);
  const onAddressChangehandler = (event) =>setEnteredAddress(event.target.value);
  const onObjIdChangehandler = (event) =>setEnteredObjId(event.target.value);
   
   


  const onFormSubmit = (event) => {
    event.preventDefault();

    const found_details = {
      name: enteredName,
      objid: enteredObjId,
      number: enteredNumber,
      place: enteredPlace,
      address: enteredAddress,
    };
    Axios.post(
      "https://lostnfound-api-backend.onrender.com/api/v1/found",
      found_details
    )
      .then((res) => console.log("posted", res))
      .catch((err) => console.log("errorr", err));
      Axios.get(`http://localhost:3002/api/v1/object/${found_details.objid}`)
      .then((res)=>{
        return res;
      })
      .then((data)=>{
        // this.setState({data:data})
        console.log("mathisss",data);

      });
    setEnteredName("");
    setEnteredAddress("");
    setEnteredPlace("");
    setEnteredNumber("");
    setEnteredObjId("");
    setOpen2(false);
    setColor("green");setText("Founded !")
    var btn = document.getElementById('btnn');
    btn.disabled=true
  };
  return (
    <>
      <div class="found">
        {" "}
  
        <button id="btnn" style={{background:color}}  onClick={handleClickOpen}>{text}</button>
      </div>

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
          <DialogContentText id="alert-dialog-description"></DialogContentText>
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
        <DialogTitle id="alert-dialog-title">{"Details"}</DialogTitle>
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
          <TextField margin="dense" value={enteredObjId} onChange={onObjIdChangehandler} fullWidth id="objid" label="Lost Object Id" type="text" varient="standard"/>
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
    </>
  );
}
