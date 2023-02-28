import React, { useState,useEffect } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new_expense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];




    function App() {
     const [lost,setLost] = useState();
     const [expenses, setExpenses] = useState();

      const fetchdata=()=>{
        return fetch('http://localhost:3002/api/v1/expenses')
         .then((res)=>{
           return res.json()
         })
         .then((data)=>{
           // this.setState({data:data})
           console.log("mathi",data.expenses);
           setExpenses(data.expenses);
         });
       }
       useEffect(()=>
       {
          fetchdata();
       },[])
       const onAddExpense = (new_expense) => {  
        console.log(new_expense);
        let expense ={};
        // "title": "laptop", "amount":6384089068, "date": "12102020", "name":"boobes","desc":"acer aspire"
        expense.title = new_expense.title;
        expense.amount = new_expense.amount;
        // expense.date = new_expense.date;
        expense.name = new_expense.name;
        expense.desc = new_expense.desc;
        console.log("hi",expense); 
        fetch('http://localhost:3002/api/v1/expenses',
        {
          method:"POST",
          body:JSON.stringify({expense})
        }
        )
        setExpenses((prev) =>{
          return [expense,...prev];
        });
        console.log(expense)
      }
       console.log("boobes",lost)
       console.log("ss",expenses)
      // const onAddNewExpense = (new_expense) => {
      //   setExpenses((previous_expenses) => {
      //     return [new_expense, ...previous_expenses];
      //   })
      // }
  return (
    <div className="App">
       <NewExpense onAddNewExpense={onAddExpense} />
       <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
