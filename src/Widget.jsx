import React  from 'react'
import ReactCountryFlag from "react-country-flag"
import './Style.css'
function Widget(props) {

        
    return (
   <div>
      <div className="card">
      <div className="container">
      {props.MyData.weather[0].description==="clear sky"?<img src='img/cloudy.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="cloudy day"?<img src='img/cloudy-day.png'alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="sunny"?<img src='img/sun.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="rain"?<img src='img/rain.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="heavy rain"?<img src='img/heavy-rain.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="wind"?<img src='img/wind.png' alt=""/>:''}
      {props.MyData.weather[0].description==="Mostly Cloudy"?<img src='img/mostcloudy.png'  alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="storm"?<img src='img/storm.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="thunder"?<img src='img/storm.png'  alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="tornado"?<img src='img/tornado.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="mist"?<img src='img/mist.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="fog"?<img src='img/fog.png'  alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="hail"?<img src='img/hail.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="scattered clouds"?<img src='img/clouds.png'  alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="smoke"?<img src='img/smoke.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="few clouds"?<img src='img/cloud.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="broken clouds"?<img src='img/cloud.png'  alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="haze"?<img src='img/haze.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="overcast clouds"?<img src='img/overcast.png' alt="" className='img'/>:''}
      {props.MyData.weather[0].description==="drizzle"?<img src='img/drizzle.png' alt="" className='img'/>:''}

      
    <h5>{props.MyData.weather[0].description}</h5>
    <h1><b>{props.MyData.name}</b></h1>
    Country <span className='flg'>
    <ReactCountryFlag
                countryCode= {props.MyData.sys.country}
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title= {props.MyData.sys.country}
            />
    </span>
    <h3>Lat: {props.MyData.coord.lat} / Lon: {props.MyData.coord.lon}</h3>
    <h2>Temp: {(props.MyData.main.temp-273.15).toFixed(2)}°C</h2>
    <p>{<i className="fas fa-temperature-high  temp1"></i>}  {(props.MyData.main.temp_max-273.15).toFixed(2)}°C /{<i className="fas fa-temperature-low temp2"></i>}  {(props.MyData.main.temp_min-273.15).toFixed(2)}°C</p>
    <h4>{<i className="fas fa-tint temp3"></i>}   {props.MyData.main.humidity}</h4>
   </div>
  </div>
  </div>
 
    )
}

export default Widget