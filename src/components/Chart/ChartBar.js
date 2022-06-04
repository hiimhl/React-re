import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";
  //css로 사용할 것이기 때문에 string으로 작성.

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    //round = 반올림
    //얼마큼 채워져야할지 1!100 사이의 값으로 나타내줌
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
