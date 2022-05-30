//보통 card는 둥근 모서리에 옅은 그림자, 그리고 여러 요소들이 있는 컨테이너 모양을 뜻함.
// div 대신 사용할 컴포넌트/ wrap component
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
