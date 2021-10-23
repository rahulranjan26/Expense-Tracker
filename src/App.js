import React, { useState } from "react";
import NewExpense from "./Components/NewExpense";
import Expenses from "./Components/Expenses";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2021, 10, 15),
    title: "CarInsurance",
    amount: "$350",
  },
];
function App() {
  const [expenses, setNewExpenses] = useState(DUMMY_EXPENSES);
  function addExpenses(data) {
    console.log(data);
    setNewExpenses((prevExp) => {
      return [...prevExp, data];
    });
  }
  return (
    <div>
      <NewExpense addNewSetOfData={addExpenses} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
