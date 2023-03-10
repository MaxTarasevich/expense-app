import React from 'react'
import './ExpenseList.css'

import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  )
}

export default ExpenseList
