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
        ["+", "-", "*", "/"],
        ["7", "8", "9",],
        ["4", "5", "6"],
        ["1", "2", "3", ],
        ["0", ".", "C", "="]
      ];
  
      buttons.forEach((row) => {
        const buttonRow = document.createElement("div");
        buttonRow.classList.add("row");
        this.calculator.appendChild(buttonRow);
  
        row.forEach((buttonLabel) => {
          const button = document.createElement("button");
          button.innerHTML = buttonLabel;
          buttonRow.appendChild(button);
  
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
    }
  }
  
  new Calculator();
  