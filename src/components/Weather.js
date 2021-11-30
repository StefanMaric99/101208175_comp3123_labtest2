function WeatherDetail({ field, data }) {
  return (
    <div className="w-6/12 my-2">
      <p>{field}: {data}</p>
    </div>
  )
}
export default function Weather({ weather }) {

  const style = {
    borderRadius: "50px",
// background: #e0e0e0;
    boxShadow:  "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
    padding: "2rem"
  }

  // return 123;

  return (
    <div style={style}>
      <div className="flex">
        <img src={`http://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@2x.png`} />
        <h2 className="text-3xl my-3 items-center">{weather['name']}: Main</h2>
      </div>
      <div className="flex flex-wrap">
        <WeatherDetail
          field={"main"}
          data={weather['weather'][0]['main']}
        />
        <WeatherDetail
          field={"Description"}
          data={weather['weather'][0]['description']}
        />
        <WeatherDetail
          field={"Temp"}
          data={weather['main']['temp']}
        />
        <WeatherDetail
          field={"Feels like"}
          data={weather['main']['feels_like']}
        />
        <WeatherDetail
          field={"Pressure"}
          data={weather['main']['pressure']}
        />
        <WeatherDetail
          field={"Humidity"}
          data={weather['main']['humidity']}
        />
      </div>

      <h2 className="text-xl my-3">Wind</h2>
      <div className="flex flex-wrap">
        <WeatherDetail
          field={"Speed"}
          data={weather['wind']['speed']}
        />
        <WeatherDetail
          field={"Deg"}
          data={weather['wind']['deg']}
        />
        <WeatherDetail
          field={"Gust"}
          data={weather['wind']['gust']}
        />
      </div>
    </div>
  )
}