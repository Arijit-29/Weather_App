import { useSelector } from "react-redux";
const WeatherHours = () => {
  const forecastdays = useSelector(
    (state) => state.weather.forecast?.forecast?.forecastday
  );
  const locationData = useSelector((state) => state.weather.forecast?.location);
  if (!forecastdays || !locationData || forecastdays.length < 2) {
    return null;
  }
  const todayHours = forecastdays[0].hour;
  const tomorrowHours = forecastdays[1].hour;

  const searchedCityHour = parseInt(
    locationData.localtime.split(" ")[1].split(":")[0]
  );
  const startIndex = todayHours.findIndex((hour) => {
    const hourOfForecast = parseInt(hour.time.split(" ")[1].split(":")[0]);
    return hourOfForecast >= searchedCityHour;
  });
  let hourlyData = [];
  if (startIndex !== -1) {
    const remainingToday = todayHours.slice(startIndex);
    if (remainingToday.length >=8) {
      hourlyData = remainingToday.slice(0, 8);
    } else {
      const neededFromTomorrow = 8 - remainingToday.length;
      const hoursFromTomorrow = tomorrowHours.slice(0, neededFromTomorrow);
      hourlyData = [...remainingToday, ...hoursFromTomorrow];
    }
  } else {
    hourlyData = tomorrowHours.slice(0, 8);
  }
  return (
    <div className="card-container">
      {hourlyData?.map((hour, index) => {
        const time = new Date(hour.time).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });
        return (
          <div className="hour-card" key={index}>
            <div className="hour-time">
              <p>{time}</p>
            </div>
            <div className="hour-condition">
              <img src={hour?.condition.icon} alt={hour?.condition.text} />
            </div>
            <div className="hour-time">
              <h2>{Math.round(hour?.temp_c)}°C</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default WeatherHours;
