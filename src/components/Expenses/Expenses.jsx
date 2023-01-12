import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear)
  }

  const filteredExpenses = expenses.filter(
    // eslint-disable-next-line eqeqeq
    (expense) => expense.date.getFullYear() == filteredYear
  )

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
