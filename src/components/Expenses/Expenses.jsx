import React, { useState } from "react";

import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [year, setYear] = useState("");
  console.log(year);
  return (
    <>
      <ExpensesFilter setYear={setYear} />
      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
