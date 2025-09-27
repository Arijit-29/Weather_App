import { useSelector } from "react-redux";
const Location = () => {
  const location = useSelector((state) => state.weather.forecast?.location);
  if (!location) {
    return null;
  }
  const parts = location.localtime.split(" ");
  const date = parts[0].split("-").reverse().join("-");
  const time = parts[1];
  return (
    <div className="location">
      <div className="city">
        <h2>
          {location.name},{location.country}
        </h2>
      </div>
      <div className="local-time">
        <h3>localtime:{time}</h3>
      </div>
      <div className="date">
        <h4>{date}</h4>
      </div>
    </div>
  );
};
export default Location;
