import "./App.css";
import Condition from "./components/condition";
import Location from "./components/location";
import Searchbar from "./components/searchbar";
import WeatherHours from "./components/weather_hours";
import OtherInfo from "./components/other_info";
import FutureInfo from "./components/future_info";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchForecastBycity } from "./redux/WeatherSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coordinates = `${latitude},${longitude}`;
          dispatch(fetchForecastBycity(coordinates));
        },
        (err) => {
          dispatch(fetchForecastBycity("Mumbai"));
        }
      );
    } else {
      dispatch(fetchForecastBycity("Mumbai"));
    }
  }, [dispatch]);
  return (
    <div className="weather-container">
      <Location />
      <Condition />
      <WeatherHours />
      <Searchbar />
      <OtherInfo />
      <FutureInfo />
    </div>
  );
}

export default App;
