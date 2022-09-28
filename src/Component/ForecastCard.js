import React from 'react';
import dateFormat, { masks } from "dateformat";
import Card from 'react-bootstrap/Card';
import '../Assets/ForecastCard.css'

const ForecastCard = ({ forecastData }) => {
    return (
        <div>
            <div>
                {forecastData.list.map((item, key) => (
                    <div key={key}>
                        <div className="forecaster-card">
                            <Card.Body>
                                <div className="body">
                                    <div className='column'>
                                        <div className="body">
                                            <div className='img'>
                                                {item.weather[0].main == "Clouds" &&
                                                    <div><img className='weatherLogo' src={require("../Assets/Image/Cloudy.png")} /></div>
                                                }
                                                {item.weather[0].main == "Haze" &&
                                                    <div><img className='weatherLogo' src={require("../Assets/Image/Cloudy.png")} /></div>
                                                }
                                                {item.weather[0].main == "Clear" &&
                                                    <div><img className='weatherLogo' src={require("../Assets/Image/Sunny.png")} /></div>
                                                }
                                                {item.weather[0].main == "Rain" &&
                                                    <div><img className='weatherLogo' src={require("../Assets/Image/Rainy.png")} /></div>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                    <div className='column' style={{ justifyContent: 'end' }}>
                                        <Card.Title className="title link">
                                            <div>{dateFormat(item.dt_txt, "dddd")}</div>
                                            <div>{dateFormat(item.dt_txt, "HH:MM")}</div>
                                        </Card.Title>
                                    </div>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastCard;