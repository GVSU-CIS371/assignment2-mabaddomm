import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrupElements = document.getElementsByClassName("syrup");

  if (syrupElements.length === 0) return;

  const syrupDiv = syrupElements[0] as HTMLDivElement;

  const color = syrups[input.value];
  if (!color) return;

  syrupDiv.style.setProperty("--syrup-color", color);

  // TODO: implement this function
}

function setupSyrupListeners(): void {
  const inputs = document.querySelectorAll('input[name="syrup"]');
  // TODO: implement this function

  inputs.forEach((inputs) => {
    const radio = inputs as HTMLInputElement;

    radio.addEventListener("change", () => {
      applySyrup(radio);
    });

    if (radio.checked) {
      applySyrup(radio);
    }
  });
}

setupSyrupListeners();

function setupCreamListeners(): void {
  const inputs = document.querySelectorAll('input[name="cream"]');
  // TODO: implement this function

  inputs.forEach((inputs) => {
    const radio = inputs as HTMLInputElement;

    radio.addEventListener("change", () => {
      applyCream(radio);
    });

    if (radio.checked) {
      applyCream(radio);
    }
  });
  // TODO: implement this function
}
setupCreamListeners();

function setupTemperatureListeners(): void {
  // TODO: implement this function
  const inputs = document.querySelectorAll('input[name="temperature"]');

  inputs.forEach((inputs) => {
    const radio = inputs as HTMLInputElement;

    radio.addEventListener("change", () => {
      applyTemperature(radio);
    });

    if (radio.checked) {
      applyTemperature(radio);
    }
  });
}

setupTemperatureListeners();

function setupBaseListeners(): void {
  const inputs = document.querySelectorAll('input[name="base"]');
  // TODO: implement this function

  inputs.forEach((inputs) => {
    const radio = inputs as HTMLInputElement;

    radio.addEventListener("change", () => {
      applyBase(radio);
    });

    if (radio.checked) {
      applyBase(radio);
    }
  });
}

setupBaseListeners();
