import React from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
import Card from "../../ui/Card";
const ExpenseItem = (props = {}) => {
   console.log(props);
    // const date = new Date(2023, 2, 30).toISOString();
    // const expense = 'March month spending';
    // const amount_spend = 245;
    const { date, title, amount,name,desc } = props;

    // const  [title, setTitle] = useState(expense);
    // const clickHandler = () => {
    //    setTitle('updated !!');
    //    // console.log(title, expense);
    // };

   return (
    
       <Card className="expense-item">

           {/* <ExpenseDate  date={date} /> */}
           <div className="expense-item__description">
            <div className="inline">
                <div className="">
                    <label htmlFor="">Name:</label>
                </div>
                <div>
                <h2>{name}</h2></div>
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

              
           </div>
           {/* <button onClick={clickHandler}>Update Title</button> */}
       </Card>
   )
}

export default ExpenseItem;