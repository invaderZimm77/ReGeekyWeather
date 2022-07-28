import "./App.css";
import SearchForm from "./Components/SearchForm.jsx";
import ListOfCities from "./Components/ListOfCitys";
import React, { useState } from "react";

function App() {
  const [cityList, setCityList] = useState([]);
  const weatherAPIkey = "5d578c737ce21d8b0f9dd6879574a1b6";
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
  const handleSelfDestruct = (cityKeyForDemo) => {
    console.log("X button pressed on", cityKeyForDemo);
    setCityList(
      cityList.filter((city) => {
        return city.name + city.sys.country !== cityKeyForDemo;
      })
    );
  };
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
  const searchBoxReset = () => {
    document.getElementById("searchBox").value = "";
    // document.getElementById("searchBox").focus();
  };
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
  const search = async (inputCity) => {
    if (cityList.length > 0) {
      const filteredArray = cityList.filter((city) => {
        let content;
        if (inputCity.includes(",")) {
          if (inputCity.split(",")[1].length > 2) {
            inputCity = inputCity.split(",")[0];
            content = city.name.toLowerCase();
          } else {
            content = city.name.toLowerCase();
          }
        } else {
          console.log(city);
          console.log(city.name);
          content = city.name.toLowerCase();
        }
        return content === inputCity.toLowerCase();
      });

      // console.log(filteredArray);
      if (filteredArray.length > 0) {
        alert(
          `You already know the weather for ${filteredArray[0].name}...otherwise please be more specific by providing the country code as well 😉`
        );
        searchBoxReset();
        return;
      }
    }

    // console.log(inputCity);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=imperial&appid=${weatherAPIkey}`
    )
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log("data.cod=", data.cod);

          if (data.cod === '404') {
            throw Error(data.message);
          }
        setCityList([...cityList, data]);
        searchBoxReset();


      })
      .catch((error) => {
        window.alert(
          "It looks like we couldn't find that one. You may need to search for a nearby city if we can't find yours specifically."
        );
        searchBoxReset();
      });
  };

  return (
    <div className="App">
      <h1 className="heading">Geeky Weather</h1>
      <SearchForm search={search} />
      <br />
      <ListOfCities
        cityList={cityList}
        handleSelfDestruct={handleSelfDestruct}
      />
    </div>
  );
}

export default App;
