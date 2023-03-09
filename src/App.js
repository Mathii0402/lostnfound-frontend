import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./components/losts/Losts";
import NewExpense from "./components/new_expense/NewLosts";
import svg from "./components/img/icon.svg";

function App() {
  const [lost, setLost] = useState();
  const [expenses, setExpenses] = useState();

  const fetchdata = () => {
    return fetch("https://lostnfound-api-backend.onrender.com/api/v1/expenses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExpenses(data.expenses);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const onAddExpense = (new_expense) => {
    let expense = {};
    // "title": "laptop", "amount":6384089068, "date": "12102020", "name":"boobes","desc":"acer aspire"
    expense.title = new_expense.title;
    expense.amount = new_expense.amount;
    expense.date = new_expense.date;
    expense.name = new_expense.name;
    expense.desc = new_expense.desc;
    expense.place = new_expense.place;
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div className="App">
      <img src={svg}></img>
      <NewExpense onAddNewExpense={onAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
