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
  } else {
    //update
    const item = formState.items.filter((item) => item.formID == formID);

    console.log(item);
  }
}
export function setStateForUpdate(id: String) {
  formState.form.formID = id;
  const form = formState.items.find((item) => {
    return item.formID == id;
  });
  if (form) {
    formState.form.formTitle = form.formTitle;
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
    formState.items = filteredData;
  }
  saveStateToStore();
}

export function updateById(id: String, title: String) {
  if (id !== null && title != "") {
    const currentFormState = formState.items.map((item) => {
      if (item.formID == id) {
        item.formTitle = title;
      }
      return item;
    });
  }
  formState.form = { formID: null, formTitle: "" };
  saveStateToStore();
}
