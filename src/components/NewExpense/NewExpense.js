import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

function NewExpense(props) {
  function saveExpenseDataHandler(userExpenseData) {
    const expenseData = {
      ...userExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
