import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/weather/getWeather";
import Input from "./Input";
import Logo from "./Logo";
import "./WeatherApp.css";
import Location from "./Location";
function WeatherApp() {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.data.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="body-div">
      <Input />
      <Location data={datas} />
      <Logo/>
    </div>
  );
}

export default WeatherApp;
