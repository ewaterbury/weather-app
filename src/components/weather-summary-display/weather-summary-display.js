import "./weather-summary-display.css";

export class WeatherSummaryDisplay {
  constructor(parent) {
    this.parent = parent;
  }

  build(summaryObj, src) {
    const div = document.createElement("div");
    div.classList.add("weather_summary_display");
    ((parent) => {
      const div = document.createElement("div");
      div.classList.add("weather_summary");
      ((parent) => {
        const h2 = document.createElement("h2");
        h2.textContent = summaryObj.summary.city;
        const h3 = document.createElement("h3");
        h3.textContent = summaryObj.summary.country;
        parent.append(h2, h3);
      })(div);
      ((parent) => {
        const img = document.createElement("img");
        img.src = src;
        parent.append(img);
      })(div);
      ((parent) => {
        const p = document.createElement("p");
        p.textContent = summaryObj.summary.temperature;
        parent.append(p);
      })(div);
      ((parent) => {
        const p = document.createElement("p");
        p.textContent = summaryObj.summary.condition;
        parent.append(p);
      })(div);
      ((parent) => {
        const div = document.createElement("p");
        ((parent) => {
          const span = document.createElement("span");
          span.textContent = `H: ${summaryObj.summary.high}`;
          parent.append(span);
        })(div);
        ((parent) => {
          const span = document.createElement("span");
          span.textContent = `L: ${summaryObj.summary.low}`;
          parent.append(span);
        })(div);
        parent.append(div);
      })(div);
      parent.append(div);
    })(div);
    this.parent.append(div);
  }
}
