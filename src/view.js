import { TextInputHeader } from "./components/text-input-header/text-input-header.js";
import { ToggleMenu } from "./components/toggle-menu/toggle-menu.js";
import { WeatherSummaryDisplay } from "./components/weather-summary-display/weather-summary-display.js";
import { DataTable } from "./components/data-table/data-table.js";
import { ContentCarousel } from "./components/content-carousel/content-carousel.js";
import { forecastDisplay } from "./components/forecast-display/forecast-display.js";
export class View {
  constructor() {}

  buildHeader(parent, headerText, placeholderText) {
    const header = new TextInputHeader(parent);
    header.build(headerText, placeholderText);
  }

  buildToggleMenu(parent, inputId, leftLabel, rightLabel) {
    const toggleMenu = new ToggleMenu(parent);
    toggleMenu.build(inputId, leftLabel, rightLabel);
  }

  buildContainer(parent, name) {
    const div = document.createElement("div");
    div.classList.add(name);
    div.id = name;
    parent.append(div);
  }

  buildWeatherSummary(parent, summaryObj, src) {
    const WeatherSummary = new WeatherSummaryDisplay(parent);
    WeatherSummary.build(summaryObj, src);
  }

  buildTable(parent, tableObj) {
    const table = new DataTable(parent);
    table.setReturnStatus();
    return table.build(tableObj);
  }

  buildContentCarousel(parent, contentArr) {
    const carousel = new ContentCarousel(parent);
    carousel.build(contentArr);
    carousel.addNavigationListeners();
    carousel.displaySlide(1);
  }

  buildForecast(parent, contentArr) {
    const forecast = new forecastDisplay(parent);
    forecast.build(contentArr);
  }
}
