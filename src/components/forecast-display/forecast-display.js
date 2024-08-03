import "./forecast-display.css";
export class forecastDisplay {
  constructor(parent) {
    this.parent = parent;
  }

  build(forecastArr) {
    const div = document.createElement("div");
    div.classList.add("forecast_display");
    forecastArr.map((day) => {
      ((parent) => {
        const span = document.createElement("span");
        span.classList.add("forecast_day");
        ((parent) => {
          const p = document.createElement("p");
          p.textContent = day.weekday;
          parent.append(p);
        })(span);
        ((parent) => {
          const img = document.createElement("img");
          img.src = day.src;
          parent.append(img);
        })(span);
        ((parent) => {
          const p = document.createElement("p");
          p.textContent = day.condition;
          parent.append(p);
        })(span);
        ((parent) => {
          const p = document.createElement("p");
          p.textContent = `L: ${day.low} H: ${day.high}`;
          parent.append(p);
        })(span);
        parent.append(span);
      })(div);
      this.parent.append(div);
    });
  }
}
