import React from 'react'

const WeatherCard = ({ weather }) => {
  return (
    <div className='Weather-card'>
      <div className='Card-header'>
        <div>
          <p className='Weather-city'>
            {weather ? weather.name + " " + weather.sys.country : "-"}</p>
          <p className='Weather-description'>
          {weather ? weather.weather[0].description : "-"}</p>
        </div>
        <img 
          alt={'weather'} className={'Weather-icon'} 
          src={`icons/${weather ? weather.weather[0].icon : "unknown"}.png`}
        />
      </div>
      <div className='Card-body'>
        <h2 className='Weather-temp'>{weather ? Math.round(weather.main?.temp - 273.15) : ""}°C</h2>
        <div className='Weather-details'>
          <div className='Parameters'>
            <span className='Param-label'>Details</span>
          </div>            
          <div className='Parameters'>
            <span className='Param-label'>Feels like</span>
            <span className='Param-val'>
              {weather ? (weather.main?.feels_like - 273.15).toFixed(2) : "-"} °C
            </span>
          </div>
          <div className='Parameters'>
          <span className='Param-label'>Humidity</span>
            <span className='Param-val'>
              {weather ? weather.main?.humidity  : "-"} %</span>
          </div>
          <div className='Parameters'>
          <span className='Param-label'>Pressure</span>
            <span className='Param-val'>
              {weather ? weather.main?.pressure  : "-"} hPs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
