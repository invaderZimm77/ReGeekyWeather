import "./App.css";
import SearchForm from "./Components/SearchForm.jsx";
import ListOfCities from "./Components/ListOfCitys";
import React, { useState } from "react";
import CityTile from "./Components/CityTile";
import { GKYplanetPicker } from "./Functions/GKYplanetPicker";

function App() {
  const [cityList, setCityList] = useState([]);
  const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";

  const handleSelfDestruct = (cityKeyForDemo) => {
    console.log("X button pressed on", cityKeyForDemo);

    setCityList(
      cityList.filter(function (city) {
        console.log(city);
        return city.key !== cityKeyForDemo;
      })
    );
  };

  const searchBoxReset = () => {
    document.getElementById("searchBox").value = "";
    // document.getElementById("searchBox").focus();
  };

  const search = async (inputCity) => {
    console.log("CityList length is", cityList.length);

    // if (cityList.length > 0) {
    //   const filteredArray = cityList.filter((el) => {
    //     let content = "";
    //     console.log(inputCity);
    //     if (inputCity.includes(",")) {
    //       // if (inputCity.split(",")[1].length > 2) {
    //       //   inputCity = inputCity.split(",")[0];
    //       //   content = el.cityName.toLowerCase();
    //       // } else {
    //       //   content = el.cityName.toLowerCase();
    //       // }
    //     } else {
    //       console.log("no comma")
    //       // content = el.cityName.toLowerCase();
    //     }
    //     return inputCity.toLowerCase();
    //   });

    //   console.log(filteredArray);
    //   // console.log(filteredArray.);
    //   if (filteredArray.length > 0) {
    //     alert(
    //       `You already know the weather for${filteredArray[0].cityName}...otherwise please be more specific by providing the country code as well 😉`
    //     );
    //     // boxReset();
    //     return;
    //   }
    // }

    console.log(inputCity);
    

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=${weatherAPIkey}`
    )
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data)
        const { main, name, sys, weather } = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const GKYplanet = GKYplanetPicker(
          Math.round(main.temp),
          Math.round(main.humidity)
        );

        const newCity = (
          <CityTile
            cityName={name}
            country={sys.country}
            temp={main.temp}
            humidity={main.humidity}
            currentCondition={weather[0]["description"]}
            weatherIcon={icon}
            gkyPlanetName={GKYplanet[0]}
            gkyPlanetImg={GKYplanet[1]}
            gkyPlanetQuip={GKYplanet[2]}
            key={name + sys.country}
            keyVal={name + sys.country}
            handleSelfDestruct={handleSelfDestruct}
          />
        );

        searchBoxReset();
        setCityList([...cityList, newCity]);
      })
      .catch((error) => {
        window.alert("Please enter a valid city. You may need to search for a nearby city if we can't find yours specifically.");
        searchBoxReset();
      });
  };

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <SearchForm search={search} />
      <br />
      <ListOfCities cityList={cityList} />
    </div>
  );
}

export default App;
