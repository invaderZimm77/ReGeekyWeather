import "../CityTile.css";

const CityTile = (props) => {
  return (
    <li className="city-tile">
      <div className="city-tile-top-row">
        <h2 className="city-name">
          <span>{props.cityName}</span>
          <sup className="city-country">{props.country}</sup>
        </h2>
        <button
          className="city-tile-closebutton"
          onClick={() => props.handleSelfDestruct(props.keyVal)}
        >
          X
        </button>
      </div>
      <div className="city-temp">
        {Math.round(props.temp ?? 0)}
        <sup className="city-temp-unit">°F</sup>
      </div>
      <div className="city-humidity">
        {" "}
        Humidity: {Math.round(props.humidity ?? 0)}
        <sup className="city-temp-unit">%</sup>
      </div>
      <figure>
        <section className="img-row">
          <img
            className="city-weather-icon"
            src={props.weatherIcon}
            alt="Icon Not Found"
          />
          <img
            className="gky-planet-img"
            src={props.gkyPlanetImg}
            alt="Planet Not Found"
          />
        </section>
        <figcaption>
          {props.currentCondition}
          {"\n"} The weather is like that of the planet {props.gkyPlanetName}.{" "}
          {props.gkyPlanetQuip}
        </figcaption>
      </figure>
    </li>
  );
};

CityTile.defaultProps = {
  cityName: "No city",
  country: "No Country",
  temp: null,
  humidity: null,
  currentCondition: "ᚢᚣᚤᚥ ᚨᚩᚪᚫᚬᚭᚮᚯ",
  weatherIcon: "https://openweathermap.org/img/wn/04d@2x.png",
  gkyPlanetName: "Planet",
  gkyPlanetImg:
    "https://media.istockphoto.com/vectors/not-found-page-404-error-file-not-found-vector-id1139665574",
  gkyPlanetQuip: "I'm a quip. puip quip",
  key: null,
};
export default CityTile;
