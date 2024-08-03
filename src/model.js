import { format } from "date-fns";
import potet from "./potet.jpg";
export class Model {
  constructor() {
    this.weatherapiKey = "2db9ecce0e494388b3a192454240807";
    this.tempScale = "farenheit";
    this.measScale = "imperial";
    this.weather = "";
    this.giphyapiKey = "a2JUnQOUtwk7bNbPf60dY27MtmcWiCYY";
  }

  //Is this the best way to store the data?
  async fetchWeather(location) {
    await fetch(
      `http://api.weatherapi.com/v1/current.json/forecast.json?key=${this.weatherapiKey}&q=${location}&aqi=no&days=3`,
      { mode: "cors" }
    )
      .then((response) => {
        if (response.status === 400) {
          response = false;
          alert("Invalid location. Please try again.");
          throw new Error("Invalid location. Please try again.");
        }
        return response.json();
      })

      .then((response) => {
        this.weather = response;
      });
  }

  generateSummary() {
    const weather = {
      summary: {
        city: this.weather.location.name,
        country: this.weather.location.country,
        temperature: `${
          this.tempScale === "farenheit"
            ? this.weather.current.temp_f
            : this.weather.current.temp_c
        }°`,
        condition: this.weather.current.condition.text,
        high: `${
          this.tempScale === "farenheit"
            ? this.weather.forecast.forecastday[0].day.maxtemp_f
            : this.weather.forecast.forecastday[0].day.maxtemp_c
        }°`,
        low: `${
          this.tempScale === "farenheit"
            ? this.weather.forecast.forecastday[0].day.mintemp_f
            : this.weather.forecast.forecastday[0].day.maxtemp_c
        }°`,
      },
    };
    return weather;
  }

  generateWeather() {
    const weather = [
      {
        temperature: {
          temperature: `${
            this.tempScale === "farenheit"
              ? this.weather.current.temp_f
              : this.weather.current.temp_c
          }°`,
          feels_like: `${
            this.tempScale === "farenheit"
              ? this.weather.current.feelslike_f
              : this.weather.current.feelslike_c
          }°`,
          heat_index: `${
            this.tempScale === "farenheit"
              ? this.weather.current.heatindex_f
              : this.weather.current.heatindex_c
          }°`,
          high: `${
            this.tempScale === "farenheit"
              ? this.weather.forecast.forecastday[0].day.maxtemp_f
              : this.weather.forecast.forecastday[0].day.maxtemp_c
          }°`,
          low: `${
            this.tempScale === "farenheit"
              ? this.weather.forecast.forecastday[0].day.mintemp_f
              : this.weather.forecast.forecastday[0].day.mintemp_c
          }°`,
        },
      },
      {
        location: {
          name: this.weather.location.name,
          region: this.weather.location.region,
          country: this.weather.location.country,
          time_zone: this.weather.location.tz_id,
          local_time: this.weather.location.localtime, //datefns
          sunrise: this.weather.forecast.forecastday[0].astro.sunrise,
          sunset: this.weather.forecast.forecastday[0].astro.sunset,
        },
      },
      {
        precipitation: {
          precipitation: `${
            this.measScale === "imperial"
              ? this.weather.current.precip_in
              : this.weather.current.precip_mm
          } ${this.measScale === "imperial" ? "in" : "mm"}`,
          chance_of_rain: `${this.weather.forecast.forecastday[0].day.daily_chance_of_rain}%`,
          chance_of_snow: `${this.weather.forecast.forecastday[0].day.daily_chance_of_snow}%`,
          total_snow: `${
            isNaN(
              this.weather.forecast.forecastday[0].day.condition.totalsnow_cm
            )
              ? 0
              : this.measScale === "imperial"
              ? (this.weather.forecast.forecastday[0].day.condition.totalsnow_cm *= 0.393701)
              : this.weather.forecast.forecastday[0].day.condition.totalsnow_cm
          } ${this.measScale === "imperial" ? "in" : "cm"}`,
        },
      },
      {
        humidity: {
          humidity: `${this.weather.current.humidity}%`,
        },
      },
      {
        wind: {
          speed: `${
            this.measScale === "imperial"
              ? this.weather.current.wind_mph
              : this.weather.current.wind_kph
          } ${this.measScale === "imperial" ? "mph" : "kph"}`,
          gust: `${
            this.measScale === "imperial"
              ? this.weather.current.gust_mph
              : this.weather.current.gust_kph
          } ${this.measScale === "imperial" ? "mph" : "kph"}`,
          direction: this.weather.current.wind_dir,
        },
      },
    ];
    return weather;
  }

  async generateForecast() {
    const forecast = [];
    let i = 0;
    for (const day of this.weather.forecast.forecastday) {
      const forecastDay = {
        weekday:
          i === 0
            ? "Today"
            : format(new Date(day.date.replace(/-/g, "/")), "iii"),
        condition: day.day.condition.text,
        src: await this.fetchGif(day.day.condition.text),
        high: `${
          this.tempScale === "farenheit" ? day.day.maxtemp_f : day.day.maxtemp_c
        }°`,
        low: `${
          this.tempScale === "farenheit" ? day.day.mintemp_f : day.day.mintemp_c
        }°`,
      };
      forecast.push(forecastDay);
      i++;
    }
    return forecast;
  }

  updateTempScale() {
    this.tempScale === "farenheit"
      ? (this.tempScale = "celsius")
      : (this.tempScale = "farenheit");
  }

  updateMeasScale() {
    this.measScale === "imperial"
      ? (this.measScale = "metric")
      : (this.measScale = "imperial");
  }

  async fetchGif(weather = this.weather.current.condition.text) {
    const gif = await fetch(
      `http://api.giphy.com/v1/gifs/translate?api_key=${this.giphyapiKey}&s=${weather}`,
      { mode: "cors" }
    )
      .then((response) => {
        if (response.status === 429) {
          return potet;
        }
        return response.json();
      })
      .then((response) => {
        if (response === potet) {
          return response;
        }
        return response.data.images.original.url;
      });
    return gif;
  }
}
