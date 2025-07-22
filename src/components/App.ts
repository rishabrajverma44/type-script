import { FilterSearch } from "./FilterSearch";
import { FormComponent } from "./FormComponent";
import { TableComponent } from "./TableComponent";

export function App() {
  const root = document.getElementById("app");
  if (root) root.innerHTML = "";
  const container = document.createElement("div");
  if (container) {
    container.appendChild(FormComponent());
    container.appendChild(FilterSearch());
    container.appendChild(TableComponent());
  }

  root?.appendChild(container);
}
