import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${classes.Card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;