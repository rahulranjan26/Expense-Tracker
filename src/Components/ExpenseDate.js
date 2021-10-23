import React from "react";
import styled from "styled-components";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Content>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </Content>
  );
}

const Content = styled.div`
  color: black;
  font-weight: 500;
  width: 108px;
  height: 70px;
  font-size: 1rem;
  margin: 5px 10px;
  margin-right: 20px;
  padding: 8px;
  border-radius: 15px;
  background-color: #4e4d4d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Year = styled.div`
  margin: 2px 0;
  font-weight: 600;
`;
const Month = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Day = styled.div`
  color: white;
  font-weight: 800;
  font-size: 24px;
`;
export default ExpenseDate;
