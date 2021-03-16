// setting table data as the info from data.js, variable named data in that file
var tableData = data;

// selecting the Filter Table button
var filterButton = d3.select("#filter-btn");

// Selecting the form, added a "form" id to the form tag to select this
var form = d3.select("#form");

// Creating event handlers for clicking the button or pressing the enter key
filterButton.on("click", searchDate);
form.on("submit", searchDate);

// Creating the function to run for both events
function searchDate() {

    // Preventing the page from refreshing
    d3.event.preventDefault();

    // Selecting the input element
    var inputElement = d3.select(".form-control")

    // obtaining the value of the inputElement about
    var inputValue = inputElement.property("value").trim();

    // testing
    //console.log(inputValue);
    //console.log(tableData);

    // finding the filtered data for the specific entered date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // this works to log it
    console.log(filteredData);
    
// CREATING THE TABLE

    // Getting a reference to the table body in index.html
    var tbody = d3.select("tbody");

    // Clearing the table rows and values from tbody tag in html code before the filtered data is added to the table
    // Otherwise if dates are submitted without the page being refreshed, each group of filtered dates will be added to the table holding previous dates   
    tbody.html("");

    filteredData.forEach((x) => {
        // adding a table row for each lot of data
        var row = tbody.append("tr");
        // adding the values to that row
        Object.entries(x).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}


