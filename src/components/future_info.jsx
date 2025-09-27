import { useSelector } from "react-redux";
const FutureInfo = () => {
  const forecastDays = useSelector(
    (state) => state.weather.forecast?.forecast?.forecastday
  );

  if (!forecastDays || forecastDays.length < 2) {
    return null;
  }

  const nextDays = forecastDays.slice(1);

  return (
    <div className="future-info"style={{ gridColumn: "8 / 13", gridRow: "3",alignSelf:"center" }}>
      <h1 className="heading">The Next Days Forecast</h1>
      {nextDays.map((day, index) => {
        const date = new Date(day.date + "T00:00:00");
        const formattedDate = date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
        return (
          <div className="forecast-items" key={index}>
            <div className="forecast-details">
              <div className="forecast-icon">
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                />
              </div>
              <div className="details">
                <h2>{formattedDate}</h2>
                <p>{day.day.condition.text}</p>
              </div>
            </div>
            <div className="forecast-temp">
              <div className="temp-display">
                <h2>{Math.round(day.day.maxtemp_c)}°C</h2>
                <h2>{Math.round(day.day.mintemp_c)}°C</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FutureInfo;
