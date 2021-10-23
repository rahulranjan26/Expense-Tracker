import React, { useState } from "react";
import styled from "styled-components";

function ExpenseForm(props) {
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      date: new Date(date),
      amount: amount,
      title: title,
    };
    // console.log(expenseData);
    props.onSumbitClick(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <Form onSubmit={submitHandler}>
      <Control>
        <Title>
          <label>Title:</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </Title>
        <Title>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </Title>
        <Title>
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </Title>
      </Control>
      <button type="submit">Add Expense</button>
    </Form>
  );
}

const Form = styled.form`
  width: 75vw;
  background: #7e96c3;
  margin: 25px auto;
  height: 250px;
  border-radius: 15px;
  position: relative;
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;
    background-color: #0a0246;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 10px 10px 0;
  }
`;
const Control = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 15px;
  grid-gap: 15px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 25vw;
  label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input {
    border-radius: 8px;
    padding: 10px;
    font-size: 22px;
  }
`;

export default ExpenseForm;
