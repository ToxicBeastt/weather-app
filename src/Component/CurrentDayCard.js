import React from 'react';
import '../Assets/CurrentCard.css'
import { BsFillCloudFill, BsFillCloudRainHeavyFill, BsCloudHazeFill, BsFillSunFill } from "react-icons/bs";

const OnedayCard = ({ currentWeatherData }) => {
  return (
    <div className='currentWheatherCard'>
      <div className='header'>
        <div>
          <div>Today</div>
          <div>{currentWeatherData.city}</div>
          <div>
              {currentWeatherData.weatherResponse.weather[0].main}
            </div>
        </div>
        <div>
          {currentWeatherData.weatherResponse.weather[0].main == "Clouds" &&
            <div><BsFillCloudFill size={70}/></div>
          }
          {currentWeatherData.weatherResponse.weather[0].main == "Haze" &&
            <div><BsCloudHazeFill size={70}/></div>
          }
          {currentWeatherData.weatherResponse.weather[0].main == "Clear" &&
            <div><BsFillSunFill size={70}/></div>
          }
          {currentWeatherData.weatherResponse.weather[0].main == "Rain" &&
            <div><BsFillCloudRainHeavyFill size={70}/></div>
          }
        </div>
      </div>
      <div className='footer'>
        <div className='temperature'>{currentWeatherData.weatherResponse.main.temp}°C</div>
        <div className='details'>
          <div className='detailsRow'>
            <div className='detailsCol'>Details</div>
          </div>
          <div className='detailsRow'>
            <div className='detailsCol'>Wind</div>
            <div>{currentWeatherData.weatherResponse.wind.speed} m/s</div>
          </div>
          <div className='detailsRow'>
            <div className='detailsCol'>Humidity</div>
            <div>{currentWeatherData.weatherResponse.main.humidity}%</div>
          </div>
          <div className='detailsRow'>
            <div className='detailsCol'>pressure</div>
            <div>{currentWeatherData.weatherResponse.main.pressure}hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnedayCard;
