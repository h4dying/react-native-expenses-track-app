import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpenseContext } from '../store/expenses-context';

function AllExpenses() {
  const { expenses } = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod='Total'
      fallbackText='No Expenses'
    />
  );
}

export default AllExpenses;
