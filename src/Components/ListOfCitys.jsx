import React from "react";
import { GKYplanetPicker } from "../Functions/GKYplanetPicker";
import CityTile from "./CityTile";

const ListOfCitys = ({ cityList, handleSelfDestruct }) => {
  return (
    <ul className="list-of-cities">
      {cityList.map((city) => {
        const { main, name, sys, weather } = city;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        const GKYplanet = GKYplanetPicker(
          Math.round(main.temp),
          Math.round(main.humidity)
        );
        return (
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
      })}
    </ul>
  );
};

export default ListOfCitys;
