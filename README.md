# React Weather V1

This is a hobby app that uses a free API to display current weather information, using ReactJS.

## To run locally

1. Pull the repository.
2. In the project root, create a 'secrets' folder.
3. Head to https://openweathermap.org/api and register for a key.
3. Head to https://traveltime.com/ and register for a key.
4. Get the key, and create a new file under secrets called 'keys.json'
5. In the JSON file, create two fields, 'geo_key' and 'weather_key'.
6. Set the value of 'geo_key' to the TravelTime key, and 'weather_key' to the OpenWeatherMap key.
7. Run 'npm install'.
8. Run 'npm start'.
9. The local server will be accessible on port 8080.

The two APIs in use are:
  * OpenWeatherMap OneCall API: Fetches weather information based on coordinates.
  * TravelTime Geocoding API: Takes a search term, and returns the coordinates of said location.

At the time of writing (October 2021) both are free to register for and use. Although TravelTime state that they limit to 10 API calls a day, their docs note that Geocoding doesn't count, and is subsequently unlimited.

N.B. This project's .gitignore sets the secrets directory to be ignored. Never commit/push private API keys to any repository.