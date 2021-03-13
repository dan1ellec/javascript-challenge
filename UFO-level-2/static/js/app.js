// from data.js
var tableData = data;

// YOUR CODE HERE!

// selecting the Filter Table button
var filterButton = d3.select("#filter-btn");

// Selecting the form id located in the form tag
var form = d3.select("#form");

// Creating event handlers for clicking the button or pressing the enter key
filterButton.on("click", searchDate);
form.on("submit", searchDate);

// Creating the function to run for both events
function searchDate() {

    // Preventing the page from refreshing, when click submit or enter 
    d3.event.preventDefault();

    //DATE

    // Selecting the input element
    var dateInputElement = d3.select("#datetime")

    // obtaining the value of inputElement variable
    var dateInputValue = dateInputElement.property("value");

    // finding the filtered data for the specific entered date
    // using sighting as a pararmeter for this proccess. it references all the data from tableData
    // don't think it matters what the parameter name is
    var dateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue);
    
// CREATING THE TABLE

    // Getting a reference to the table body in index.html
    var tbody = d3.select("tbody");

    dateFilteredData.forEach((x) => {
        var row = tbody.append("tr");
        // adding div with table body
        Object.entries(x).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    // CITY !!!!!

      // Selecting the input element
    var cityInputElement = d3.select("#city")

    // obtaining the value of inputElement variable
    var cityInputValue = cityInputElement.property("value");

    // finding the filtered data for the specific entered date
    // using sighting as a pararmeter for this proccess. it references all the data from tableData
    // don't think it matters what the parameter name is
    var cityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue);
    
// CREATING THE TABLE

    // Getting a reference to the table body in index.html
    var tbody = d3.select("tbody");

    cityFilteredData.forEach((x) => {
        var row = tbody.append("tr");
        // adding div with table body
        Object.entries(x).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    



}




    // checking output
    //console.log(inputValue);
    //console.log(tableData);
    //console.log(filteredData);


// broken up if needed

    // appending a row 'tr' for each filteredData object
    // data.forEach(function(filteredData) {
    //     console.log(filteredData);
    //     var row = tbody.append("tr");
    //     });
    // this works! it is all logged and tr appears in the section in tbody when looking at Elements in chrome



    // tableData.forEach((filteredData) => {
    //     var row = tbody.append("tr");
    //     // adding div with table body
    //     Object.entries(filteredData).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });