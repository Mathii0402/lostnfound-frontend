import React, { useState } from "react"

import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
import Card from "../../ui/Card";
import AlertDialog from "../../founddialogue/Founddialogue";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography'
const ExpenseItem = (props = {}) => {
   console.log(props);
    // const date = new Date(2023, 2, 30).toISOString();
    // const expense = 'March month spending';
    // const amount_spend = 245;
    const { date, title, amount,name,desc,place,objid} = props;
    console.log("hiiii",objid)
     const  [find, setFind] = useState(false);
    const clickHandler = () => {
       setFind('found');
       
       // console.log(title, expense);
    };
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
   return (
        
       <Card >
  <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
    <div className="expense-item">
            <div className="inline">
                <div className="">
                    <label htmlFor="">Name:</label>
                </div>
                <div>
                <h2>{name}</h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Obj Id:</label></div>
                <div><h2> {objid} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Lost object:</label></div>
                <div><h2> {desc} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Desc:</label></div>
                <div><h2> {title} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Lost Date:</label></div>
                <div><h2> {date} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Mobile Number:</label></div>
                <div><h2> {amount} </h2></div>
            </div>
            <div className="inline">
                <div><label htmlFor="">Place:</label></div>
                <div><h2> {place} </h2></div>
            </div >
            <div className="inline">
        <AlertDialog/>
          
            </div>

           </div>
           
      </HtmlTooltip>
           {/* <ExpenseDate  date={date} /> */}
         
       </Card>
   )
}

export default ExpenseItem;