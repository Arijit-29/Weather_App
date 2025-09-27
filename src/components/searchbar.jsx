import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchForecastBycity } from "../redux/WeatherSlice";
import { useState, useEffect } from "react";
const Searchbar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const location = useSelector((state) => (
     state.weather.forecast?.location?.name
  ));
  useEffect(() => {
    if (location) {
      setCity(location);
    }
  }, [location]);
  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchForecastBycity(city));
      setCity("");
    }
  };
  return (
    <div className="searchbar">
      <FaLocationDot className="icon" />
        <input
          type="text"
          placeholder={location && "search for a city"}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      <BiSearch className="icon" onClick={handleSearch} />
    </div>
  );
};
export default Searchbar;
