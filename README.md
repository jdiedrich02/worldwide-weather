# Worldwide Weather
This is a simple weather app that I created using Angular! It allows users to go in and look at current weather for major cities around the world! This is mostly a side project for my portfolio!
It has 2 main pages for users to search for a city and the one page to display the weather for the selected city!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## About the Project

There are 2 pages to the project. One main page to display the weather data: 
![image](https://github.com/jdiedrich02/worldwide-weather/assets/77290127/f6a202fb-4335-43bf-b868-f848b9fd2213)

And another to search for a specific city:
![image](https://github.com/jdiedrich02/worldwide-weather/assets/77290127/7d74c78b-9f9a-44ad-abcd-f90c8587997b)

The weather data that the app uses is from the Weather API: https://www.weatherapi.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### API Setup Locally

If you want to clone the code locally and use your own API key for the data, you will have to create environment files.

Run the `ng generate environments` command in the terminal in the angular project. The environment files will be auto generated for you.

Ensure that the environment files include the proper environment setup:

```
export const environment = {
  apiKeyWeatherAPI: '<Your API Key Here>'
};
```
Note this will have to be from the same weather API for the data to be rendered the same.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
