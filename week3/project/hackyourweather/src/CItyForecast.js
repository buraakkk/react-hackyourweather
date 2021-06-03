import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CItyForecast = () => {
  const [forecast, setForecast] = useState();
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
        console.log(data);
        return {
          name: data.city.name,
          country: data.city.country,
          date: tempItem.dt_txt,
          temp: tempItem.main.temp,
        };
      });
      setForecast(temp);
    }
  }, [params.cityId]);

  return (
    <div className="forecast">
      {isLoading && <p>Loading..</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && forecast && (
        <div>
          <h2>5 days forecast</h2>
          <h3>
            {forecast[0].name}, {forecast[0].country}
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={forecast}
              margin={{
                right: 50,
              }}
            >
              <Area dataKey="temp" stroke="#b478ed" fill="#dabcf6" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <CartesianGrid opacity={0.5} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
      {!isLoading && !error && (
        <Link className="back" to="/">
          Back
        </Link>
      )}
    </div>
  );
};

export default CItyForecast;


// This is the API that I take from: https://openweathermap.org/forecast5
// This is the link that I benefit from to create the chart. https://github.com/leighhalliday/recharts-exodus-area-chart/tree/5ddf1a0e47bef65a04ca371ba561b807256d914c