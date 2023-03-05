import React from "react";
import ExpenseItem from "../expense_item/ExpenseItem";
import './ExpensesList.css';
import icon from "../../img/search.gif"
const ExpensesList = (props) => {

  const {items} = props;
    if (items.length === 0 || !items) {
     return (
        <h2 className="expenses-list__fallback"><img class="ico"src={icon}></img></h2>
     );
    }

   return (
        <ul className="expenses-list">
                  <div  className="expense-item-1">
                    <h2>Name</h2>
                    <h2>Obj Id</h2>
                    <h2>Lost Object</h2>
                    <h2>About Object</h2>
                    <h2>Date of Lost</h2>
                    <h2>Email</h2>
                    <h2>Place</h2>
                    <h2>Status</h2>
                  </div>
            {
                items.map(each_expense => (
                    <ExpenseItem
                        key={each_expense.id}
                        objid = {each_expense.objid}
                        date={each_expense.date}
                        title={each_expense.title}
                        amount={each_expense.amount}
                        desc ={each_expense.desc}
                        name = {each_expense.name}
                        place = {each_expense.place}
                    />
                ))
            }
        </ul>
    )
  }

  export default ExpensesList;