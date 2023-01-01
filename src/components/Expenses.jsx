import React from 'react'

import './Expenses.css'

import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  )
}

export default Expenses
