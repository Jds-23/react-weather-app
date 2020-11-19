import React,{useState,useEffect} from "react";
import Conditions from "./Conditions";
import 'rsuite/dist/styles/rsuite-default.css';
import { Input, InputGroup,Icon,Loader,Button,Toggle, Col} from 'rsuite';
import ErrorAlert from "./ErrorAlert";

const GetForecast=()=> {
    const [city,setCity]=useState("");
    const [weather,setWeather]=useState({});
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [unit,setUnit]=useState("metric");

    const styles={
        width: 100+"%",
        marginBottom:10
    }


    useEffect(()=>
        {
            setWeatherCurrentLocation();
        },[]
    );

    const setWeatherCurrentLocation=()=>{

        navigator.geolocation.getCurrentPosition( (p)=> {
            const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`;
            fetch(URL)
                .then(res => res.json())
                .then(
                    res => {
                        setWeather({weather: res,unit:unit})
                    }
                ).then(() => setLoading(false));

        },(err)=>{
            setError({message:err.message,type:"error"})
        });

    }


    const searchWeather=()=>{
        if(city!=="") {

            const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`;

            setLoading(true);
            fetch(URL)
                .then(res => {
                    if (res.ok)
                    {
                        return res.json()
                    }
                    else {
                        throw new Error(res.statusText);
                    }
                })
                .then(
                    res => {
                        setWeather({weather: res,unit:unit})
                    }
                ).then(() => setLoading(false)).then(() => setCity(""))
                .catch(error=>{
                    setError({message:error.message,type:"error"});
                });

        }
        else
        {
            setError({message:"Empty Field",type:"warning"});
        }


    }


    return(
        <Col xs={24} sm={12} md={6}>
            {error&&<ErrorAlert error={error} clearError={()=>setError(null)}/>}
            <div style={{minHeight: 200+"px"}}>
                {loading?<Loader center size="md" content="loading..."/>:<Conditions resWeather={weather} />}
            </div>
            <InputGroup style={styles}>
                <Input type="text" id="city" value={city}  onChange={(value,event)=>setCity(event.target.value)}/>
                <InputGroup.Button onClick={searchWeather}>
                    <Icon icon="search" />
                </InputGroup.Button>
            </InputGroup>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Toggle size="lg"
                        defaultChecked
                        checkedChildren="&#176;C"
                        unCheckedChildren="&#176;F"
                        onChange={(state)=>{
                            if (state)
                                setUnit("metric")
                            else
                                setUnit("imperial")
                        }}/>
                <Button appearance="primary" size="sm" onClick={setWeatherCurrentLocation}>Get my Weather</Button>
            </div>
        </Col>
    );
}


export default GetForecast;