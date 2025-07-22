import { deleteById, getTableData } from "../app.state.ts";

export function TableComponent() {
  const table = document.createElement("div");
  const tableData = getTableData();
  table.innerHTML = `<table>
  <thead>
    <tr>
      <td class='title'>Title</td><td>Action</td>
    </tr>
  </thead>
  <tbody>
    ${tableData
      .map((item) => {
        return `<tr><td>${item.formTitle}</td><td class='action'><button data-id=${item.formID} class="delete-btn">Delete</button><button data-id=${item.formID}>Edit</button></td></tr>`;
      })
      .join("")}
  </tbody>
  </table>`;
  const deleteBtn = table.querySelectorAll(".delete-btn");
  deleteBtn.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      const target = event.target as HTMLButtonElement;
      const id = target.dataset.id;
      if (id) {
        deleteById(id);
      }
    });
  });

  return table;
}
