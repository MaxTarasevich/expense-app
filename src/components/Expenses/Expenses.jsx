import React from 'react'

import './Expenses.css'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  )
}

export default Expenses
