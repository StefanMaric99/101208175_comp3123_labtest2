import React from "react";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [weatherData, setWeatherData] = React.useState([]);

  const key = "c35808ffe0dc63817237e633f0fd5d56";
  const uri = `http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${key}`;

  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 20

  React.useEffect(() => {
    axios
      .get(uri)
      .then(({ data }) => {
        console.log(data)
        setWeatherData(data)
      })
      .catch(err => console.log(err));
  }, []);

  const style = {
    background: isDayTime ? "skyblue" : "skyblue",
    height: "100vh",
  }
  
  if(weatherData.length === 0) {
    return <div className="text-3xl">Loading...</div>
  }

  return (
    <div style={style} className="flex items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl mb-5">Open Weather</h1>

        <Weather weather={weatherData} />

        {/* <pre>{JSON.stringify(weatherData, null, 2)}</pre> */}
      </div>

    </div>
  );
}

export default App;
