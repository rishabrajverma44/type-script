import { getFormState, setFormState } from "../app.state.ts";
import { App } from "./App";

export function FormComponent() {
  const formState = getFormState();
  const form = document.createElement("form");
  const isEditMood = !!formState.formID;
  form.innerHTML = `
  <div>
     <input name="title" value='${
       formState.formTitle || ""
     }' placeholder="Title" class="inputField" />
    <button type="submit">${isEditMood ? "Update" : "Add"} Item</button>
  </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = form?.title?.value?.trim();
    if (!titleInput) {
      alert("Enter somthing !");
      return;
    }
    if (isEditMood) {
    } else {
      //generate id here
      const id = Math.floor(Math.random() * 10000).toString();
      setFormState({ formID: id, formTitle: titleInput });
    }
    App();
  });
  return form;
}
