import './App.css'
import useFetch from './useFetch'

function App() {

  const weatherData = useFetch("https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric")
  console.log(weatherData);


  return (
    <>

      <div className="d-flex w-100" style={{ minHeight: "100vh", background: "rgba(0, 0, 0, 0.6)" }}>
        <div className='d-flex flex-column justify-content-between m-4 p-5 text-light' style={{ width: "70%" }}>
          <h2>The Weather</h2>
          <div className='d-flex flex-wrap align-items-end gap-5 pb-5'>
              <div>
                <h1 style={{ fontSize: "75px" }}>{weatherData?.main.temp}°</h1>
                <h2>{weatherData?.name}</h2>
              </div>
            <div>
              <img width={'50px'} src="images/cloud.png" alt="" />
              <h4>{weatherData?.weather[0].main}</h4>
            </div>
          </div>
        </div>
        <div style={{ minHeight: "100vh", background: "rgba(164, 156, 160, 0.8)", width: "30%" }} className='px-4 py-3'>
          <h4 className='text-white'>{weatherData?.name}</h4>
          <hr />
          <div className='py-2'>
            <h5>Weather Details</h5>
            <p className='text-light fw-bold pt-2'>Country</p>
            <p>{weatherData?.sys.country}</p>
            <p className='text-light fw-bold'>Humidity</p>
            <p>{weatherData?.main.humidity}%</p>
            <p className='text-light fw-bold'>Wind</p>
            <p>{weatherData?.wind.speed} m/s</p>
            <p className='text-light fw-bold'>Pressure</p>
            <p>{weatherData?.main.pressure} hPa</p>
          </div>
          <hr />
          <p className='text-light fw-bold pt-3'>Feels Like</p>
          <p>{weatherData?.main.feels_like}°</p>
        </div>
      </div>

    </>
  )
}

export default App
