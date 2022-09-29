import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../Assets/ForecastCard.css';
import '../Assets/CurrentCard.css';
import dateFormat from "dateformat";
import { BsFillCloudFill, BsFillCloudRainHeavyFill, BsCloudHazeFill, BsFillSunFill } from "react-icons/bs";

const ForecastCard = ({ forecastData }) => {
    return (
        <div>
            <div className='title-text'>Daily Forecast</div>
            <div>
                <Accordion defaultActiveKey="0">
                    {forecastData.map((item, key) => (
                        <Accordion.Item eventKey={key}>
                            <Accordion.Header>
                                <div className='forecastCard'>
                                    <div className='img'>
                                        {item.weather[0].main === "Clouds" &&
                                            <div><BsFillCloudFill size={70} /></div>
                                        }
                                        {item.weather[0].main === "Haze" &&
                                            <div><BsCloudHazeFill size={70} /></div>
                                        }
                                        {item.weather[0].main === "Clear" &&
                                            <div><BsFillSunFill size={70} /></div>
                                        }
                                        {item.weather[0].main === "Rain" &&
                                            <div><BsFillCloudRainHeavyFill size={70} /></div>
                                        }
                                    </div>
                                    <div className='daysTitle title-text'>
                                        {dateFormat(item.dt_txt, "dddd")}
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="daily-details-grid secondary-text">
                                    <div className="daily-details-grid-item">
                                        <label>Pressure:</label>
                                        <label>{item.main.pressure}</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Humidity:</label>
                                        <label>{item.main.humidity}</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Clouds:</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Wind speed:</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Sea level:</label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="daily-details-grid-item">
                                        <label>Feels like:</label>
                                        <label>{item.main.feels_like}°C</label>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default ForecastCard;