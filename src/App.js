import React, {useState} from 'react';
import './App.css';
import ExpenseList from './components/expenselist';
import ExpenseForm from './components/expenseform';
import Alert from './components/alert';
import uuid from "uuid";

const initialExpenses = [
  {id: uuid(), charge:'rent', amount:1600},
  {id: uuid(), charge:'car payment', amount:400},
  {id: uuid(), charge:'credit card bill', amount:1200}
];

function App() {
  //*************** state values ***********
  // all expenses, add expense
const [expenses, setExpenses] = useState(initialExpenses);
 //single expense
const [charge, setCharge] = useState('');
//single amount
const [amount, setAmount] = useState('');
//***************** functionality ***********

const handleCharge = evt => {
  setCharge(evt.target.value)
}

const handleAmount = evt => {
  setAmount(evt.target.value)
}

const handleSubmit = evt => {
  evt.preventDefault();
}

  return (
    <div>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm 
          charge={charge} 
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          />
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        total spending : <span className='total'>
          ${expenses.reduce((acc, curr)=>{
            return (acc += curr.amount); 
            }, 0)}
        </span>
      </h1>
    </div>

  );
}

export default App;
