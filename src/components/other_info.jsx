import { FaTemperatureHalf, FaWind } from "react-icons/fa6";
import { WiBarometer, WiHumidity } from "react-icons/wi";
import { useSelector } from "react-redux";
const OtherInfo = () => {
  const currentData = useSelector((state) => state.weather.forecast?.current);
  if (!currentData) {
    return null;
  }
  return (
    <div className="other-info">
      <div className="temp">
        <h1>{currentData.temp_c}°C</h1>
      </div>
      <div className="infos">
        <p>
          <FaTemperatureHalf className="icons" />
          feels like {currentData.feelslike_c}°C
        </p>
        <p>
          <FaWind className="icons" />
          {currentData.wind_dir} {currentData.wind_kph}km/h
        </p>
        <p>
          <WiBarometer className="icons" />
          {currentData.pressure_mb} <p>milibar</p>
        </p>
        <p>
          <WiHumidity className="icons" />
          {currentData.humidity}%
        </p>
      </div>
    </div>
  );
};
export default OtherInfo;
