// from data.js
var tableData = data;

// YOUR CODE HERE!

// selecting the Filter Table button
var filterButton = d3.select("#filter-btn");

// Selecting the form
// there is a form tag but also an id form-group which does not include the seciton with the button
// not sure which one is needed
var form = d3.select("#form-group");

// Creating event handlers for clicking the button or pressing the enter key
filterButton.on("click", searchDate);
form.on("submit", searchDate);

// Creating the function to run for both events
function searchDate() {

    // Preventing the page from refreshing
    // currently it is refreshing if i click enter so need to look into that 
    // it s only working if I click the filter table button
    d3.event.preventDefault();

    // Selecting the input element
    // also has id = "datetime" if this doesn't work
    var inputElement = d3.select(".form-control")

    // obtaining the value of the input
    var inputValue = inputElement.property("value");

    // using these gave an input
    //console.log(inputValue);
    //console.log(tableData);

    // finding the filtered data for the specific entered date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // this works to log it
    console.log(filteredData);
    



}

// currently only working when click buttin not with enter