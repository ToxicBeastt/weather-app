import React from 'react'
import dateFormat from "dateformat";
import Card from 'react-bootstrap/Card';
import "../Assets/CurrentDayForecast.css"
import '../Assets/CurrentCard.css'
import { BsFillCloudFill, BsFillCloudRainHeavyFill, BsCloudHazeFill, BsFillSunFill } from "react-icons/bs";

const CurrentDayForecastCard = (({ forecastData }) => {
    return (
        <div>
            <div className='title-text'>Today Focecast</div>
            <div className='grid-container'>
                {forecastData.map((item, key) => (
                    <div key={key}>
                        <Card className="Current-card">
                            <div className='img'>
                                {item.weather[0].main === "Clouds" &&
                                    <div><BsFillCloudFill size={70}/></div>
                                }
                                {item.weather[0].main === "Haze" &&
                                    <div><BsCloudHazeFill size={70}/></div>
                                }
                                {item.weather[0].main === "Clear" &&
                                    <div><BsFillSunFill size={70}/></div>
                                }
                                {item.weather[0].main === "Rain" &&
                                    <div><BsFillCloudRainHeavyFill size={70}/></div>
                                }
                            </div>
                            <Card.Body>
                                <div className="body">
                                    <Card.Title>
                                        <div className='secondary-text'>{dateFormat(item.dt_txt, "dddd")}</div>
                                        <div className='secondary-text'>{dateFormat(item.dt_txt, "HH:MM")}</div>
                                    </Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
})


export default CurrentDayForecastCard;