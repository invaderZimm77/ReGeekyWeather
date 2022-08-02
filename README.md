App Title: ReGeeky Weather

App Description: I wanted to take one of my very first projects and re-create it with more modern tools and also want to be able to expand on what ive learned. This app takes input and gives visual feed back of the requested city's current weather with a geeky planet that has similar weather and a quip About the weather

Link to deployed site: https://invaderzimm77.github.io/ReGeekyWeather/

API used: https://openweathermap.org/api


API Snippet:
   ```
   {
    "coord": {
        "lon": -77.3997,
        "lat": 39.4668
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 73.78,
        "feels_like": 74.52,
        "temp_min": 70.88,
        "temp_max": 77.29,
        "pressure": 1024,
        "humidity": 78
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.01,
        "deg": 232,
        "gust": 1.99
    },
    "clouds": {
        "all": 90
    },
    "dt": 1633635811,
    "sys": {
        "type": 2,
        "id": 2038516,
        "country": "US",
        "sunrise": 1633605095,
        "sunset": 1633646569
    },
    "timezone": -14400,
    "id": 4355594,
    "name": "Frederick",
    "cod": 200
}
```
Wireframes: https://whimsical.com/starwars-app-YEdHW1cMkBckeT8WUzmotn@2Ux7TurymN8kYUSbEJLp


MVP: takes user input 
    returns current weather based on input
    returns a geeky planet based on current temp and humidity.
    able to have multipule city tiles
    give a quip about the weather

PMVP:
        based on crosscompare from starwars api
		 be able to display more complex information
Goals:
	 to show myself what I had learned but also what I could learn on the fly.

Timeframes: all time Estimaited -- 20% planning/research 60%coding 20%polishing/refining/debuggingCSS.
    psuedocode/wireframe -- 3hours
    coding to mvp -- 10hours
    beyondMVP -- 2hours
    debug/head-scratching time -- 2hours