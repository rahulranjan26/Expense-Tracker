import React from "react";
import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.expenseTitle);

  return (
    <Wrapper>
      <ExpenseDate date={props.date} />
      <Type>{props.title}</Type>
      <Cost>{props.amount}</Cost>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #5e5c5c;
  width: 75vw;
  height: 125px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 5px rgb(31, 30, 30, 0.7);
  display: flex;
  align-items: center;
`;
const Type = styled.div`
  flex: 1;
  color: white;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 5px;
`;
const Cost = styled.div`
  color: white;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 5px 10px;
  background-color: green;
  padding: 15px;
  border-radius: 17px;
  border: 3px solid white;
`;
export default ExpenseItem;
