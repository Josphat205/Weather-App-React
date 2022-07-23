import React from "react";
import './Location.css'
function Location({data}) {
  const current = Date.now();
  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(current);
  console.log(data)
  return (
    <div className="min-h-fit flex justify-center">
      <div className="flex flex-col bg-white rounded p-4  w-full max-w-xl">
        <div className="titles flex items-center justify-between">
			<div className="top-div font-bold text-gray-600 text-2xl">{data.name ? data.name : 'Location'}</div>
			<div className="top-div font-bold text-gray-500 text-xl">{data.sys ? data.sys.country : 'Country'}</div>
			</div>
        <div className="text-md text-gray-400">{date}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <svg
            className="w-32 h-32"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            ></path>
          </svg>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="flex flex-col items-center ml-6">
            <div className="font-bold text-xl text-gray-800">{data.weather ? data.weather.map(e => e.description) : null}</div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="font-mono text-7xl font-light text-gray-800">{data.main ? (Math.floor(data.main.temp - 273.15)) : 0}°C</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-bold text-gray-600 text-xl">Wind</div>
            <div className="text-lg text-gray-700">{data.wind ? data.wind.speed : 0}mph</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-gray-600 text-xl">Humidity</div>
            <div className="text-lg text-gray-700">{data.main ? data.main.humidity : 0}°F</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-gray-600 text-xl">Pressure</div>
            <div className="text-lg text-gray-700">{data.main ? data.main.pressure : 0}Pa</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
