import tableData from "./table-data.json" with { type: "json" };
let json = tableData;
let sortDirection = true;

const colHead = (content, index) => {
  return `<th data-index="${index}" onclick="sortTable(${index})">${content}</th>`;
};

const makeCell = (content) => {
  return `<td>${content}</td>`;
};

const makeRow = (content) => {
  return `<tr>${content}</tr>`;
};

const renderTable = (data) => {
  const colHeaders = Object.keys(data[0])
    .map((key, index) => colHead(key, index))
    .join("");
    let arrow = "";
  const bodyRows = data
    .map((row) => {
      return makeRow(
        Object.keys(row)
          .map((col) => makeCell(row[col]))
          .join("")
      );
    })
    .join("");
  document.querySelector("thead tr").innerHTML = colHeaders;
  document.querySelector("tbody").innerHTML = bodyRows;
};

window.sortTable = (index) => {
  const key = Object.keys(json[0])[index];
  sortDirection = !sortDirection;
    json.sort((a, b) => {
        if (a[key] > b[key]) return sortDirection ? 1 : -1;
        if (a[key] < b[key]) return sortDirection ? -1 : 1;
        return 0;
    });
  renderTable(json);
};

renderTable(json);
