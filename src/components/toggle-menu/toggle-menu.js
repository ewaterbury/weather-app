import "./toggle-menu.css";
export class ToggleMenu {
  constructor(parent) {
    this.parent = parent;
  }

  build(inputId, leftLabel, rightLabel) {
    const span = document.createElement("span");
    span.classList.add("toggle_menu");
    ((parent) => {
      const span = document.createElement("span");
      span.textContent = leftLabel;
      parent.append(span);
    })(span);
    ((parent) => {
      const label = document.createElement("label");
      label.classList.add("switch");
      ((parent) => {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = inputId;
        const span = document.createElement("span");
        span.classList.add("slider");
        parent.append(input, span);
      })(label);
      parent.append(label);
    })(span);
    ((parent) => {
      const span = document.createElement("span");
      span.textContent = rightLabel;
      parent.append(span);
    })(span);
    this.parent.append(span);
  }
}
