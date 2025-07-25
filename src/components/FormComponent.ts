import { getFormState, addFormState, updateById } from "../app.state.ts";
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
    <button type="submit" class="button">${
      isEditMood ? "Update" : "Add"
    } Title</button>
  </div>
  `;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputElement = form.querySelector<HTMLInputElement>(".inputField");
    const titleInput = inputElement?.value;
    if (!titleInput) {
      alert("Please enter somthing !");
      return;
    }
    if (isEditMood && formState.formID !== null) {
      updateById(formState.formID, titleInput);
    } else {
      //generate id here
      const id = Math.floor(Math.random() * 10000).toString();
      addFormState({ formID: id, formTitle: titleInput });
    }
    App();
  });
  return form;
}
