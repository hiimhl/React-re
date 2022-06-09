import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      return;
      // 공백을 제거한 length의 값 === 0 이란 뜻.
    }

    if (+enteredAge < 1) {
      // input으로 입력된 값은 전부 문자열로 처리되는데(바닐라 js에서)
      //react에서는 오류가 생길 수 있기 때문에 +를 넣어 입력된 값을 숫자형으로 바꿈.
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Year)</label>
        <input
          id="age"
          min="1"
          value={enteredAge}
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
