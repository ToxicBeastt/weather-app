import React from 'react'
import dateFormat, { masks } from "dateformat";
import Card from 'react-bootstrap/Card';
import "../Assets/CurrentDayForecast.css"


const CurrentDayForecastCard = (({ forecastData }) => {
    const now = new Date();
    const today = forecastData.list[0]
    return (
        <div>
            Today Focecast
            <div className='grid-container'>
                {forecastData.list.splice(0, 14).map((item, key) => (
                    <div>
                        {dateFormat(item.dt_txt, "dddd") === dateFormat(today.dt_txt, "dddd") &&
                            <div key={key}>
                                <Card className="Current-card">
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
                                    <Card.Body>
                                        <div className="body">
                                            <Card.Title className="title link">
                                                <div>{dateFormat(item.dt_txt, "dddd")}</div>
                                                <div>{dateFormat(item.dt_txt, "HH:MM")}</div></Card.Title>
                                            <Card.Text className="text link">accc</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
})


export default CurrentDayForecastCard;