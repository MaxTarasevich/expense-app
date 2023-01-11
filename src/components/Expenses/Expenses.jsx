import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenses
        // eslint-disable-next-line eqeqeq
        .filter((expense) => expense.date.getFullYear() == filteredYear)
        .map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
    </Card>
  )
}

export default Expenses
