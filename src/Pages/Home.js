import React, { useEffect, useState } from 'react'
import Search from '../Component/Search'
import "../Assets/Home.css"
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api/Api";
import OnedayCard from '../Component/CurrentDayCard';
import axios from "axios";
import { Container } from 'react-bootstrap';
import ForecastCard from '../Component/ForecastCard';
import CurrentDayForecastCard from '../Component/CurrentDayForecastCard';
import dateFormat from "dateformat";
import useGeoLocation from '../Hooks/useGeolocation';
import { GEO_API_HEADER, GEO_API_URL } from "../Api/Api";

export default function () {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecast] = useState(null);
    const [dailyforecast, setDaily] = useState(null);
    const location = useGeoLocation();

    const now = new Date();

    function getData(lat, lon) {
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
                const arrayTodayForecast = []
                const arrayDailyForecast = []
                let uniqueDay = []

                // get Today Forcast by 3 Hours
                for (let i = 0; i < 7; i++) {
                    if (dateFormat(forecastResponse.list[0].dt_txt, "dddd") === dateFormat(forecastResponse.list[i].dt_txt, "dddd")) {
                        arrayTodayForecast[i] = forecastResponse.list[i]
                    }
                }

                // get 5 Days Forcast
                let i = 0;
                while (uniqueDay.length < 6) {
                    if (!uniqueDay.includes(dateFormat(forecastResponse.list[i].dt_txt, "dddd"))) {
                        uniqueDay.push(dateFormat(forecastResponse.list[i].dt_txt, "dddd"))
                        arrayDailyForecast.push(forecastResponse.list[i])
                    }
                    i = i + 1;
                }

                setCurrentWeather({ city: weatherResponse.name, weatherResponse })
                setForecast(arrayTodayForecast)
                setDaily(arrayDailyForecast)
                console.log(weatherResponse)
            })

    }

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        getData(lat, lon)
        console.log("Data Loaded")
    };
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            getData(position.coords.latitude, position.coords.longitude )
          });
        console.log('Once')
    }, [])

    return (
        <Container className='container'>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <OnedayCard currentWeatherData={currentWeather} />}
            {forecastWeather && <CurrentDayForecastCard forecastData={forecastWeather} />}
            {dailyforecast && <ForecastCard forecastData={dailyforecast} />}
        </Container>
    )
}
