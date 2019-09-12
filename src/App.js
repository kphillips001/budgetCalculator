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
console.log(expenses);

  return (
    <div>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </div>

  );
}

export default App;
