class Calculator {
  constructor() {
    this.calculator = document.createElement("div");
    this.calculator.classList.add("calculator");
    document.body.appendChild(this.calculator);

    this.display = document.createElement("input");
    this.display.setAttribute("type", "text");
    this.display.setAttribute("readonly", true);
    this.display.classList.add("display");
    this.calculator.appendChild(this.display);

    const buttons = [
      ["7", "8", "9", "+"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "*"],
      ["0", ".", "C", "/"],
      ["="],
    ];

    buttons.forEach((row) => {
      const buttonRow = document.createElement("div");
      buttonRow.classList.add("row");
      this.calculator.appendChild(buttonRow);

      row.forEach((buttonLabel) => {
        const button = document.createElement("button");
        button.innerHTML = buttonLabel;
        buttonRow.appendChild(button);

        if (["+", "-", "*", "/"].includes(buttonLabel)) {
          button.classList.add("btn-operator");
        } else if (buttonLabel === "=") {
          button.classList.add("btn-equal");
        }

        button.addEventListener("click", () => {
          if (buttonLabel === "C") {
            this.display.value = "";
          } else if (buttonLabel === "=") {
            const result = eval(this.display.value);
            this.display.value = result.toString();
          } else {
            this.display.value += buttonLabel;
          }
        });
      });
    });

    window.addEventListener("keydown", (event) => {
      const key = event.key;
      if (/[.0-9*+/-]/.test(key)) {
        this.display.value += key;
      } else if (key === "Enter") {
        const result = eval(this.display.value);
        this.display.value = result.toString();
      } else if (key === "Delete") {
        this.display.value = "";
      } else if (key === "Backspace") {
        this.display.value = this.display.value.slice(0, -1);
      }
    });
  }
}

new Calculator();
