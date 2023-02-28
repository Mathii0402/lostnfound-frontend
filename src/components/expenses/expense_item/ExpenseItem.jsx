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
                <h2>Name:{name}</h2><br />
               <h2>Lost object: {title} </h2><br />
               <h2>Desc:{desc}</h2><br />
               {/* <h2>Lost date:{date}</h2><br /> */}
               <div className="expense-item__price">+91 {amount}</div>
           </div>
           {/* <button onClick={clickHandler}>Update Title</button> */}
       </Card>
   )
}

export default ExpenseItem;