import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      id: userInput.id,
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    //onSaveExpenseData가 함수기 때문에 받아온 props를 함수로 실행할 수 있다.

    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={userInput.enteredAmount}
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
