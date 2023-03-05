import React, { useState } from "react";
import './NewExpenseForm.css';
import Axios from "axios";


const NewExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredObj, setEnteredObj] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredPlace, setEnteredPlace] = useState('');


    const onTitleChangehandler = (event) => setEnteredTitle(event.target.value);
    const onAmounChangehandler = (event) => setEnteredAmount(event.target.value);
    const onDateChangehandler = (event) => setEnteredDate(event.target.value);
    const onObjChangehandler = (event) => setEnteredObj(event.target.value);
    const onNameChangehandler = (event) => setEnteredName(event.target.value);
    const onPlaceChangehandler = (event) => setEnteredPlace(event.target.value);

    const onFormSubmit = (event) => { 
        event.preventDefault();
       
        const new_expense = {

            title: enteredTitle,
            amount: enteredAmount,
            desc:enteredObj,
            name:enteredName,
            date: new Date(enteredDate).toDateString(),
            place:enteredPlace
            // date: "10.10.2022"
        }
        Axios.post("https://lostnfound-api-backend.onrender.com/api/v1/expenses",
            new_expense
    )
        .then(res=>console.log("posted",res)).catch(err=> console.log("errorr",err));
    
        props.onSave(new_expense);
        console.log('new_expense', new_expense);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredObj("");
        setEnteredName("");
        setEnteredPlace("");
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="new-expense__controls">
           
                <div className="new-expense__control">
                    <label>Lost Object</label>
                    <input type="text" required value ={enteredObj} onChange={onObjChangehandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Name</label>
                    <input type="text" required value ={enteredName} onChange={onNameChangehandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Description</label>
                    <input type="text" required placeholder="describe about the object" value ={enteredTitle} onChange={onTitleChangehandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Email</label>
                    <input type="email"  value={enteredAmount} onChange={onAmounChangehandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" required min="2019-01-01" max="2025-01-01" value={enteredDate} onChange={onDateChangehandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Place</label>
                    <input type="text" required value={enteredPlace} onChange={onPlaceChangehandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Lost Items</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;