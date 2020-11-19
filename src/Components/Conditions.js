import React from 'react';
import Image from "./Image";

const Conditions = (props) => {
    return (
        <div>
            {props.resWeather.weather.cod === 200 ?
                <div className="Conditions">
                    <h1 style={{textAlign: "center"}}><strong>{props.resWeather.weather.name}</strong></h1>
                    <p style={{textAlign: "center"}}>It is currently {Math.round(props.resWeather.weather.main.temp)} &#176;{props.resWeather.unit==="metric"?"C":"F"} out with {props.resWeather.weather.weather[0].description}.</p>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <Image height="100"
                               width="100"
                               alt="img"
                               src={"http://openweathermap.org/img/wn/"+props.resWeather.weather.weather[0].icon+"@2x.png"}/>
                    </div>
                </div>
                : <p>hello</p>
            }
        </div>
    )
}

export default Conditions;