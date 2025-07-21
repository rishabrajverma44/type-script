import { getTableData } from "../app.state";

export function TableComponent() {
  const table = document.createElement("div");
  const tableData = getTableData();
  console.log(tableData);

  table.innerHTML = `<table>
  <thead>
    <tr>
      <td>Tittle</td><td>Action</td>
    </tr>
  </thead>
  <tbody>
    ${tableData
      .map((item) => {
        return `<tr><td>${item.formTittle} </td></tr>`;
      })
      .join("")}
  </tbody>
  </table>`;
  return table;
}
