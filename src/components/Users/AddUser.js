import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

function AddUser(props) {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="username">Age (Year)</label>
        <input id="username" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
