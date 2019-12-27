
var tableData = data;

// create table with data values
function createTable(table) {
  d3.select("tbody")
      .html("")
      .selectAll("tr")
      .data(table)
      .enter()
      .append("tr")
      .html(d=>{
        return `<td>${d.datetime}</td>
        <td>${d.city}</td>
        <td>${d.state}</td>
        <td>${d.country}</td>
        <td>${d.shape}</td>
        <td>${d.durationMinutes}</td>
        <td>${d.comments}</td>`
  })
}

createTable(tableData);

// event listener on click filter
d3.selectAll("#filter-btn").on("click", handleFilterClick)

// Filter tableData with value defined by user
function filteredDate(dateValue,cityValue,stateValue,countryValue,shapeValue) {
  var tableDataFiltered = tableData.filter(d => d.datetime === dateValue 
    || d.city === cityValue
    || d.state === stateValue
    || d.country === countryValue
    || d.shape === shapeValue)
  return tableDataFiltered;
}

//update table with filtered values
function handleFilterClick() {
  let dateValue = d3.select("#datetime").property("value");
  let cityValue = d3.select("#city").property("value");
  let stateValue = d3.select("#state").property("value");
  let countryValue = d3.select("#country").property("value");
  let shapeValue = d3.select("#shape").property("value");
  console.log(dateValue,cityValue,stateValue,countryValue,shapeValue)
  let filteredData = filteredDate(dateValue,cityValue,stateValue,countryValue,shapeValue);
  console.log(filteredData)
  createTable(filteredData);
}

