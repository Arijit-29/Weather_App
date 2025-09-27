import { useSelector } from "react-redux";
const Condition = () => {
  const currentData = useSelector((state) => state.weather.forecast?.current);
  if (!currentData) {
    return null;
  }
  return (
    <div className="condition">
      <h1>{currentData.condition.text}</h1>
    </div>
  );
};
export default Condition;
