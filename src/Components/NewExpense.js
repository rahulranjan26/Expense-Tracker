import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function submitClickHandler(data) {
    const updatedData = {
      id: Math.random.toString(),
      ...data,
    };
    props.addNewSetOfData(updatedData);
  }
  return (
    <div>
      <ExpenseForm onSumbitClick={submitClickHandler} />
    </div>
  );
}

export default NewExpense;
