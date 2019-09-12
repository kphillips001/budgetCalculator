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
const [expenses, setExpenses] = useState(initialExpenses);
 
  return (
    <div>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
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
