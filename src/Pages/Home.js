import React, { useState } from 'react'
import Search from '../Component/Search'
import "../Assets/Home.css"
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api/Api";
import OnedayCard from '../Component/CurrentDayCard';
import axios from "axios";
import { Container } from 'react-bootstrap';
import ForecastCard from '../Component/ForecastCard';
import CurrentDayForecastCard from '../Component/CurrentDayForecastCard';

export default function () {
    const [currentWeather, setCurrentWeather] = useState(null)
    const [forecastWeather, setForecast] = useState(null)

    const [data, setData] = useState(null);
    const currentWeatherFetch = useState(null);

    const now = new Date();

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch =
            axios.get(
                WEATHER_API_URL + "/weather",
                {
                    params: {
                        lat: lat,
                        lon: lon,
                        appid: WEATHER_API_KEY,
                        units: "metric"
                    }
                })
        const ForecastFetch =
            axios.get(
                WEATHER_API_URL + "/forecast",
                {
                    params: {
                        lat: lat,
                        lon: lon,
                        appid: WEATHER_API_KEY,
                        units: "metric"
                    }
                })

        Promise.all([currentWeatherFetch, ForecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].data
                const forecastResponse = await response[1].data

                setCurrentWeather({ city: searchData.label, weatherResponse })
                setForecast(forecastResponse)
                console.log(forecastResponse.list[0])
            })
        // axios(WEATHER_API_URL + "/weather?lat=" + lat + "&lon=" + lon + "&appid=" + WEATHER_API_KEY + "&units=metric", {
        //     method: "GET",
        // })
        //     .then((res) => {
        //         setData(res.data);
        //         const currentWeatherFetch = res.data
        //         setCurrentWeather({ city: searchData.label, currentWeatherFetch })
        //         console.log(res.data)
        //     })
        //     .catch((error) => console.error(error));
        // axios(WEATHER_API_URL + "/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + WEATHER_API_KEY + "&units=metric", {
        //     method: "GET",
        // })
        //     .then((res) => {
        //         setData(res.data);
        //         const ForecastFetch = res.data
        //         setCurrentWeather({ city: searchData.label, ForecastFetch })
        //         console.log(res.data)
        //     })
        //     .catch((error) => console.error(error));

    };
    return (
        <Container>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <OnedayCard currentWeatherData={currentWeather} />}
            {forecastWeather && <CurrentDayForecastCard forecastData={forecastWeather} />}
            {forecastWeather && <ForecastCard forecastData={forecastWeather} />}
        </Container>
    )
}
