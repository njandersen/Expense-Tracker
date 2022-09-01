import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.scss";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  function SelectHandler(selectedYear) {
    setFilterYear(selectedYear);
  }

  // Filters expenses based on chosen filter year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onSelect={SelectHandler} />

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
