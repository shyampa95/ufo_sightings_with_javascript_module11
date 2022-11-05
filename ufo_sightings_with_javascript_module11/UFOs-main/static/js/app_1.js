// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function with imported data to build the table
function buildTable(data) {
    // Clear out any existing data
    tbody.html(""); 
// Loop through each object in the data
  // and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      // Create a variable to append data to a table
      let cell = row.append("td");
      // Create a variable that holds the value of each object
      cell.text(val);
      }
    );
  });
}
function handleClick() {
    let date = d3.select("#datetime").property("value");
    // set a default filter and save it to a new variable
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data 
    buildTable(filteredData);
}  
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);
