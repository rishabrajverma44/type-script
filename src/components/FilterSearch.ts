import {
  clearFilterState,
  getSearchText,
  getTableData,
  searchFilterStateUpdate,
} from "../app.state";
import { App } from "./App";

export function FilterSearch() {
  const tableData = getTableData();
  const searchDivBox = document.createElement("div");
  const searchStringState = getSearchText();
  searchDivBox.innerHTML = `<div  style="display:${
    tableData.length === 0 && searchStringState === "" ? "none" : "block"
  }">
  <span class="box">
     <input name='search' placeholder='Search' id="searchField" value='${searchStringState}' />
     <button id="cancel" style="display: ${
       searchStringState !== "" ? "inline-block" : "none"
     };">X</button>
     </span>
     <Button class="button" id="search">Search</Button>
   </div>`;

  const searchBtn = searchDivBox.querySelector("#search");
  searchBtn?.addEventListener("click", () => {
    const inputVal = searchDivBox
      .querySelector<HTMLInputElement>("#searchField")
      ?.value.trim();

    if (inputVal ==="") {
      alert("Enter somthing !");
    } else {
      searchFilterStateUpdate(inputVal as string);
      App();
    }
  });
  searchDivBox.querySelector("#cancel")?.addEventListener("click", () => {
    clearFilterState();
    App();
  });
  return searchDivBox;
}
