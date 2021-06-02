import React from "react";
import { Link } from "react-router-dom";

const City = ({ city, cities, setCities }) => {

  const removeCity = async (deleteCity) => {
    const cityDeleted = await cities.filter((city) => city !== deleteCity);
    setCities((cities) => cityDeleted);
  };

  return (
    <div className="CityWeather">
        <Link to={`/${city.id}`}>
        {city.name}, {city.sys.country}
      </Link>
      <h3> 
        {city.weather[0].main} <br />
        <span>{city.weather[0].description}</span>
      </h3>
      <h5>min temp: {city.main.temp_min}</h5>
      <h5>max temp: {city.main.temp_max}</h5>
      <h5>
        location:{city.coord.lat}, {city.coord.lon}
      </h5>
      <button className="close" onClick={() => removeCity(city)}>
        X
      </button>
    </div>
  );
};

export default City;
