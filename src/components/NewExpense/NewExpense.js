import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExepenseData) => {
    const expenseData = {
      ...enteredExepenseData,
      id: Math.random().toString(),
      //이론적으로 같은 값을 두번 생성될 수 있어서 완벽하게 고유한 id 설정은 아니다.
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
