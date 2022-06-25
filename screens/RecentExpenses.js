import { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpenseContext } from '../store/expenses-context';
import { getDateMinusDay } from '../utils/date';
import { fetchExpenses } from '../utils/http';

function RecentExpenses() {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      setExpenses(expenses);
    }
    getExpenses();
  });
  const recentExpenses = expenses.filter((expense) => {
    const day = new Date();
    return getDateMinusDay(day, 2) <= expense.date;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 2 days'
      fallbackText='No recent Expenses'
    />
  );
}

export default RecentExpenses;
