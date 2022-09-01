import { useState } from "react";
import "./ExpenseForm.scss";

function ExpenseForm(props) {
  const [userTitle, setUserTitle] = useState();
  const [userAmount, setUserAmount] = useState();
  const [userDate, setUserDate] = useState();

  //Handles the input from the form
  function handleTitleChange(event) {
    setUserTitle(event.target.value);
  }
  function handleAmountChange(event) {
    setUserAmount(event.target.value);
  }
  function handleDateChange(event) {
    setUserDate(event.target.value);
  }
  //Handles form submit and saves vaules into array.
  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: userTitle,
      amount: userAmount,
      date: new Date(userDate),
    };
    props.onExpenseFormSubmit(expenseData);
    //Clears user input after storing
    setUserTitle("");
    setUserAmount("");
    setUserDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div>
          <label>Title</label>
          <input type="text" value={userTitle} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={userAmount}
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={userDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleDateChange}
          />
        </div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
