import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CItyForecast = () => {
  const [cityDetails, setCityDetails] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (!params.cityId) {
      return setError(new Error("Not found"));
    }
    return getCityWeatherDetail(params.cityId);

    async function getCityWeatherDetail(cityId) {
      setIsLoading(true);
      const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}&units=metric`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod === "404") {
          return setError(new Error("Not found"));
        }
        fetchSuccessful(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    function fetchSuccessful(data) {
      const temp = data.list.map((tempItem) => {
        return {
          name: data.city.name,
          date: tempItem.dt_txt,
          temp: tempItem.main.temp,
          country: data.city.country,
        };
      });
      setCityDetails(temp);
    }
  }, [params.cityId]);

  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && cityDetails && (
        <div>
          <h1>5 days forecast</h1>
          <h2>
            {cityDetails[0].name},{cityDetails[0].country}
          </h2>
          <AreaChart
            width={800}
            height={400}
            data={cityDetails}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      )}
      {!isLoading && <Link to="/">Back</Link>}
    </div>
  );
};

export default CItyForecast;
