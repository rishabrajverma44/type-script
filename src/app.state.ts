import { saveStateToStore } from "./app.storage";

interface formStateArg {
  formID: String | null;
  formTitle: String;
}

interface formStateProp {
  items: Array<formStateArg>;
  form: formStateArg;
}

export const formState: formStateProp = {
  items: [],
  form: {
    formID: null,
    formTitle: "",
  },
};

export function getFormState(): formStateArg {
  return formState.form;
}

export function setFormState({ formID = null, formTitle }: formStateArg) {
  if (formID != null) {
    const data = { formID: formID, formTitle: formTitle };
    formState.items.push(data);
    saveStateToStore();
  }
}

export function getTableData() {
  return formState.items;
}

export function deleteById(id: String | null) {
  if (id != null) {
    const currentData = getTableData();
    const filteredData = currentData.filter((item) => {
      return item.formID !== id;
    });
    console.log(formState.items);
    console.log(filteredData);
  }
}
