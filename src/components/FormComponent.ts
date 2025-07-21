import { getFormState, setFormState } from "../app.state";
import { App } from "./App";

export function FormComponent() {
  const formState = getFormState();
  const form = document.createElement("form");

  const isEditMood = !!formState.formID;
  form.innerHTML = `
  <div>
     <input name="tittle" value='${
       formState.formTittle || ""
     }' placeholder="Tittle" class="inputField" />
    <button type="submit">${isEditMood ? "Update" : "Add"} Item</button>
  </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = form?.tittle?.value?.trim();
    if (!titleInput) {
      alert("Enter somthing !");
      return;
    }
    if (isEditMood) {
    } else {
      //generate id here
      const id = Math.floor(Math.random() * 10000).toString();
      setFormState({ formID: id, formTittle: titleInput });
      App();
    }
  });
  return form;
}
