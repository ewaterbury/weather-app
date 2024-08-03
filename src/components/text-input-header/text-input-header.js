import "./text-input-header.css";
export class TextInputHeader {
  constructor(parent) {
    this.parent = parent;
  }

  build(headerText, placeholderText) {
    const header = document.createElement("header");
    header.classList.add("header");
    ((parent) => {
      const h1 = document.createElement("h1");
      h1.classList.add("header_title");
      h1.textContent = headerText;
      parent.append(h1);
    })(header);
    ((parent) => {
      const form = document.createElement("form");
      form.classList.add("header_text_input_form");
      ((parent) => {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "header_text_input";
        input.name = "header_text_input";
        input.placeholder = placeholderText ? placeholderText : "";
        parent.append(input);
      })(form);
      ((parent) => {
        const input = document.createElement("input");
        input.type = "submit";
        input.value = "submit";
        input.id = "header_text_input_submit_button";
        parent.append(input);
      })(form);
      parent.append(form);
    })(header);
    this.parent.append(header);
  }
}
