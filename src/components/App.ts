import { FormComponent } from "./FormComponent";
import { TableComponent } from "./TableComponent";

export function App() {
  const container: HTMLElement = document.getElementById("app")!;
  container.innerHTML = "app container";
  container.appendChild(FormComponent()!);
  container.appendChild(TableComponent()!)

  return container;
}
