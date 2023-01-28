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
        <div>
          <div>
            <span></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
