import { loadStateFromStore, saveStateToStore } from "./app.storage";

interface formStateArg {
  formID: String | null;
  formTitle: String;
}

interface formStateProp {
  items: Array<formStateArg>;
  form: formStateArg;
  searchText: string;
}

export const formState: formStateProp = {
  items: [],
  form: {
    formID: null,
    formTitle: "",
  },
  searchText: "",
};

export function getFormState(): formStateArg {
  return formState.form;
}
export function getSearchText() {
  return formState.searchText;
}

export function addFormState({ formID = null, formTitle }: formStateArg) {
  if (formID != null) {
    const data = { formID: formID, formTitle: formTitle };
    formState.items.push(data);
    saveStateToStore();
  }
}
export function setStateForUpdate(id: String) {
  //change state for title
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
  //filter sate and then save finally to storage
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
    //change titel state here for update and save finally to store
    formState.items.map((item) => {
      if (item.formID == id) {
        item.formTitle = title;
      }
      return item;
    });
    formState.form = { formID: null, formTitle: "" };
  }
  saveStateToStore();
}

export function searchFilterStateUpdate(searchQuery: string) {
  const search = searchQuery.toLowerCase().trim();
  formState.searchText = search;
  if (search !== "") {
    //filter state
    loadStateFromStore();
    formState.items = formState.items.filter((item) => {
      return item.formTitle.toLowerCase().includes(search);
    });
  }
}

export function clearFilterState(){
    formState.searchText = "";
    loadStateFromStore();
}
