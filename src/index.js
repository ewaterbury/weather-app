import "./style.css";
import { Model } from "./model.js";
import { View } from "./view.js";

/*Next Steps:
CSS text
CSStracker
build compass
build pie graph
validation for input
*/

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  buildInitalDisplay() {
    //Build Header
    (() => {
      this.view.buildHeader(
        document.querySelector("body"),
        "My Weather App",
        "Enter the name of a city to get started"
      );
    })();

    //Build Display Container
    (() => {
      this.view.buildContainer(
        document.querySelector("body"),
        "main_display_container"
      );
      document
        .getElementById("header_text_input_submit_button")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.displayWeather(
            document.getElementById("header_text_input").value
          );
        });
    })();

    //Temp Toggle Menu
    (() => {
      this.view.buildToggleMenu(
        document.querySelector("header"),
        "tempScale",
        "F°",
        "C°"
      );

      document.getElementById("tempScale").addEventListener("input", () => {
        this.model.updateTempScale();
        this.displayWeather(document.getElementById("header_text_input").value);
      });
    })();

    //Measurement Toggle Menu
    (() => {
      this.view.buildToggleMenu(
        document.querySelector("header"),
        "measScale",
        "in",
        "cm"
      );

      document.getElementById("measScale").addEventListener("input", () => {
        this.model.updateMeasScale();
        this.displayWeather(document.getElementById("header_text_input").value);
      });
    })();
  }

  async displayWeather(location) {
    const mainDisplay = document.getElementById("main_display_container");
    //Clear Display
    if (mainDisplay.childNodes.length > 0) {
      while (mainDisplay.firstChild) {
        mainDisplay.removeChild(mainDisplay.lastChild);
      }
    }
    //Fetch Weather
    if (location) {
      await this.model.fetchWeather(location);
      if (this.model.weather === false) {
        return;
      }
    }
    //const mainDisplay = document.getElementById("main_display_container");
    //Weather Summary
    this.view.buildContainer(mainDisplay, "weather_summary_container");
    this.view.buildWeatherSummary(
      document.getElementById("weather_summary_container"),
      this.model.generateSummary(),
      await this.model.fetchGif()
    );

    //Content Carousel
    const tables = this.model.generateWeather().map((obj) => {
      return this.view.buildTable("", obj);
    });
    this.view.buildContainer(mainDisplay, "carousel_container");
    this.view.buildContentCarousel(
      document.getElementById("carousel_container"),
      tables
    );

    //Forecast
    this.view.buildContainer(mainDisplay, "forecast_container");
    await this.view.buildForecast(
      document.getElementById("forecast_container"),
      await this.model.generateForecast()
    );
  }
}

const weatherApp = new Controller(new Model("Camarillo"), new View());
weatherApp.buildInitalDisplay();
