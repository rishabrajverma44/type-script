import { saveStateToStore } from "./app.storage";

interface formStateArg {
  formID: String | null;
  formTittle: String;
}

interface formState {
  items: Array<formStateArg>;
  form: formStateArg;
}

export const formState: formState = {
  items: [],
  form: {
    formID: null,
    formTittle: "",
  },
};

export function getFormState() {
  return formState.form;
}

export function setFormState({ formID = null, formTittle }: formStateArg) {
  if (formID != null) {
    const data = { formID: formID, formTittle: formTittle };
    formState.items.push(data);
    saveStateToStore();
  }
}

export function getTableData() {
  return formState.items;
}
