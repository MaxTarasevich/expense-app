import React, { useState } from 'react'

import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
  const [toggleForm, setToggleForm] = useState(true)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    onAddExpense(expenseData)
    setToggleForm(true)
  }

  if (toggleForm) {
    return (
      <div className="new-expense">
        <button onClick={() => setToggleForm(false)}>Add new expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCanselForm={() => setToggleForm(true)}
      />
    </div>
  )
}

export default NewExpense
