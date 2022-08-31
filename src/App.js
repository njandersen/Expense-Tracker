import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 247.99,
      date: new Date(2022, 8, 14),
    },
    { id: "e2", title: "Rent", amount: 780.0, date: new Date(2022, 8, 1) },
    { id: "e3", title: "Water", amount: 45.0, date: new Date(2022, 8, 20) },
    { id: "e4", title: "Electric", amount: 267.0, date: new Date(2022, 8, 26) },
  ];

  function addExpenseHandler(expense) {
    console.log(expense);
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
