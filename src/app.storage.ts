import { formState } from "./app.state.ts";

export function loadStateFromStore() {
  const data = JSON.parse(localStorage.getItem("newForm")!) || [];
  formState.items = data;
}

export function saveStateToStore() {
  localStorage.setItem("newForm", JSON.stringify(formState.items));
}
