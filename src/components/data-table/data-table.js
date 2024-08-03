import "./data-table.css";
export class DataTable {
  constructor(parent) {
    this.parent = parent;
    this.return = false;
  }

  processString(str) {
    if (typeof str === "number") {
      return str;
    }
    str = str.replace(/_/g, " ");
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  build(tableObj) {
    const table = document.createElement("table");
    table.classList.add("table");
    table.id = `${Object.keys(tableObj)}_table`;
    ((parent) => {
      const tr = document.createElement("tr");
      tr.classList.add( "table_heading_row");
      ((parent) => {
        for (const prop in tableObj) {
          const th = document.createElement("th");
          th.classList.add("table_cell", "heading_cell");
          th.textContent = this.processString(prop);
          parent.append(th);
        }
      })(tr);
      parent.append(tr);
    })(table);
    for (const obj in tableObj) {
      for (const prop in tableObj[`${obj}`]) {
        ((parent) => {
          const tr = document.createElement("tr");
          tr.classList.add("table_row");
          ((parent) => {
            const th = document.createElement("th");
            th.textContent = `${this.processString(prop)}:`;
            const td = document.createElement("td");
            td.textContent = this.processString(tableObj[`${obj}`][`${prop}`]);
            parent.append(th, td);
          })(tr);
          parent.append(tr);
        })(table);
      }
      if (this.return === true) {
        return table;
      } else {
        this.parent.append(table);
      }
    }
  }

  setReturnStatus() {
    this.return === false ? (this.return = true) : (this.return = false);
  }
}
