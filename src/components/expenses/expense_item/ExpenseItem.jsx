import React, { useState } from "react"
import Axios from 'axios';
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
import Card from "../../ui/Card";
import AlertDialog from "../../founddialogue/Founddialogue";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography'
import { useEffect } from "react";
const ExpenseItem = (props = {}) => {
  console.log(props);
  const [color, setColor] = useState();
  const [text, setText] = useState('Found?🔎');
  const [styling, setstyling] = useState('none')
  const [disable,setdisable] = useState(false);
  const { date, title, amount, name, desc, place, objid } = props;
  const [find, setFind] = useState(false);
  const clickHandler = () => {
    setFind('found');


  };
  const apicall = () => {
    Axios.get(`https://lostnfound-api-backend.onrender.com/api/v1/object/${objid}`)
    .then((res) => {
      const oid = res.data.data[0].objid;
      if (oid == objid) {
        setColor("green");
        setText("Founded !");

        let ans = res.data.data[0]

        setdatas(ans);
        setdisable(true);
        setstyling("content")
      }

    })
  }
  const [datas, setdatas] = useState({})

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      display: `${styling}`,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  useEffect(() => {
    apicall()
  }, []);
  return (

    <Card >
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <p>{datas.name}</p>
            <p>{datas.number}</p>
            <p>{datas.place}</p>
            <p>{datas.address}</p>
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
            <AlertDialog color={color} disabled={disable} text={text} />

          </div>

        </div>

      </HtmlTooltip>
      {/* <ExpenseDate  date={date} /> */}

    </Card>
  )
}

export default ExpenseItem;