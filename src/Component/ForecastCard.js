import React from 'react';
import dateFormat, { masks } from "dateformat";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import '../Assets/ForecastCard.css'

const ForecastCard = ({ forecastData }) => {
    return (
        <div>
            <div>
                <Accordion defaultActiveKey="0">
                    {forecastData.map((item, key) => (
                        <Accordion.Item eventKey={key}>
                            <Accordion.Header>
                                <div className='img'>
                                    {item.weather[0].main == "Clouds" &&
                                        <div><img className='weatherLogo' src={require("../Assets/Image/Cloudy.svg")} /></div>
                                    }
                                    {item.weather[0].main == "Haze" &&
                                        <div><img className='weatherLogo' src={require("../Assets/Image/Cloudy.svg")} /></div>
                                    }
                                    {item.weather[0].main == "Clear" &&
                                        <div><img className='weatherLogo' src={require("../Assets/Image/Sunny.png")} /></div>
                                    }
                                    {item.weather[0].main == "Rain" &&
                                        <div><img className='weatherLogo' src={require("../Assets/Image/Rainy.svg")} /></div>
                                    }
                                </div>

                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="daily-details-grid">
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