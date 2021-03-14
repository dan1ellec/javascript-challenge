// setting table data as the info from data.js, variable named data in that file
var tableData = data;

// YOUR CODE HERE!

// selecting the Filter Table button
var filterButton = d3.select("#filter-btn");

// Selecting the form
// there is a form tag but also an id form-group which does not include the seciton with the button
// not sure which one is needed
var form = d3.select("#form");
// have tried form-group and form-control
// I fixed it!!!! i was using the id or classs in a div tag
// but there was a form tag there with no id or class
// so i addedd a "form" id to that div tag and it worked!!!!

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
    // I need to relook at this because I am confised at how I am selecting value when there is no "value" in the index.html
    // no wait I understand, we are getting the value of inputElement
    // so .property("value") is an actual thing that we are applying to inputElement
    var inputValue = inputElement.property("value");

    // using these gave an input
    //console.log(inputValue);
    //console.log(tableData);

    // finding the filtered data for the specific entered date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // this works to log it
    console.log(filteredData);
    

// CREATING THE TABLE


    // Getting a reference to the table body in index.html
    var tbody = d3.select("tbody");

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

    // so it kinda works but it is just printing everything!! it's not actually filtering!
// from what I an see in the console is that it is filtering correctly but what I am putting in the table isn't that
// it's somehow everythong!


    // Clearing the table rows and values from tbody tag in html code before the filtered data is added to the table
    // Otherwise if dates are submitted without the page being refreshed, each group of filtered dates will be added to the table holding previous dates   
    tbody.html("");

    filteredData.forEach((x) => {
        var row = tbody.append("tr");
        // adding div with table body
        Object.entries(x).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

    // YAY it's workig now!!



}

// currently only working when click buttin not with enter
