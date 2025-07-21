import "./style.css";
import { App } from "./components/App.ts";
import { loadStateFromStore } from "./app.storage.ts";

document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStore();
  App();
});
