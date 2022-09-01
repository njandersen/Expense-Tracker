import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.scss";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(userExpenseData) {
    const expenseData = {
      ...userExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditing() {
    setIsEditing(false);
  }

  let editExpense = (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );
  if (isEditing) {
    editExpense = (
      <ExpenseForm
        onExpenseFormSubmit={saveExpenseDataHandler}
        onCancel={stopEditing}
      />
    );
  }

  return <div className="new-expense">{editExpense}</div>;
}

export default NewExpense;
