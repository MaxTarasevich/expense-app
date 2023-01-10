import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredExpenseData, setEnteredExpenseData] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setEnteredExpenseData((prevEnteredExpenseData) => {
      return { ...prevEnteredExpenseData, [name]: value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    onSaveExpenseData(enteredExpenseData)
    setEnteredExpenseData({
      title: '',
      amount: '',
      date: '',
    })
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            value={enteredExpenseData.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={onChangeHandler}
            value={enteredExpenseData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2024-01-01"
            onChange={onChangeHandler}
            value={enteredExpenseData.date}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
