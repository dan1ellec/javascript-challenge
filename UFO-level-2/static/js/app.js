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


// CITY !!!!!

      // Selecting the input element
    var cityInputElement = d3.select("#city")

    // obtaining the value of inputElement variable
    var cityInputValue = cityInputElement.property("value");

    // finding the filtered data for the specific entered city
    var cityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue);
    
    
// STATE !!!!!

      // Selecting the input element
    var stateInputElement = d3.select("#state")

      // obtaining the value of inputElement variable
    var stateInputValue = stateInputElement.property("value");
  
      // finding the filtered data for the specific entered city
    var stateFilteredData = tableData.filter(sighting => sighting.state === stateInputValue);


// COUNTRY !!!!!

      // Selecting the input element
    var countryInputElement = d3.select("#country")

      // obtaining the value of inputElement variable
    var countryInputValue = countryInputElement.property("value");
  
      // finding the filtered data for the specific entered city
    var countryFilteredData = tableData.filter(sighting => sighting.country === countryInputValue);


// SHAPE !!!!!

      // Selecting the input element
    var shapeInputElement = d3.select("#shape")

      // obtaining the value of inputElement variable
    var shapeInputValue = shapeInputElement.property("value");
  
      // finding the filtered data for the specific entered city
    var shapeFilteredData = tableData.filter(sighting => sighting.shape === shapeInputValue);
      

    console.log(dateFilteredData.length);
    console.log(cityFilteredData.length);
    console.log(stateFilteredData.length);
    console.log(countryFilteredData.length);

    //need to d a loop here or something 


        
    // CREATING THE TABLE

    // Getting a reference to the table body in index.html
    var tbody = d3.select("tbody");

    // Clearing the table rows and values from tbody tag in html code before the filtered data is added to the table
    tbody.html("");

    //entry for date
    if (dateFilteredData.length !== 0) {
        // no entry for others
        if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && countryFilteredData.length === 0 && shapeFilteredData.length === 0){
            tbody.html("");
            
            dateFilteredData.forEach((x) => {
                var row = tbody.append("tr");
                // adding div with table body
                Object.entries(x).forEach(([key, value]) => {
                  var cell = row.append("td");
                  cell.text(value);
                });
              });

        }
        // entry for city
        else if (cityFilteredData.length !== 0){
            // no entry for others, just date and city
            if (stateFilteredData.length === 0 && countryFilteredData.length === 0 && shapeFilteredData.length === 0){
                tbody.html("");
                
                var dateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue);

                dateCityFilteredData.forEach((x) => {
                    var row = tbody.append("tr");
                    // adding div with table body
                    Object.entries(x).forEach(([key, value]) => {
                      var cell = row.append("td");
                      cell.text(value);
                    });
                  });
            }

            // entry for state
            else if (stateFilteredData.length !== 0){

                // no entry for others, info for date, city, state
                if (countryFilteredData.length === 0 && shapeFilteredData.length === 0) {
                    tbody.html("");

                    var stateDateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue && sighting.state === stateInputValue);
                    
                    stateDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        // adding div with table body
                        Object.entries(x).forEach(([key, value]) => {
                          var cell = row.append("td");
                          cell.text(value);
                        });
                      });
                }

                // entry for country
                else if (countryFilteredData.length !== 0){

                    // no entry for shape
                    if (shapeFilteredData.length === 0){
                        // dropping any entries in table
                        tbody.html("");

                        //setting variable for selections
                        var countryStateDateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue && sighting.state === stateInputValue && sighting.country === countryInputValue);
                    
                        countryStateDateCityFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
                            // adding div with table body
                            Object.entries(x).forEach(([key, value]) => {
                            var cell = row.append("td");
                            cell.text(value);
                            });
                        });
                    }

                    // entry for shape
                    else if (shapeFilteredData.length !== 0){
                         // dropping any entries in table
                         tbody.html("");

                         //setting variable for selections
                         var shapeCountryStateDateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue && sighting.state === stateInputValue && sighting.country === countryInputValue && sighting.shape === shapeInputValue);
                     
                         shapeCountryStateDateCityFilteredData.forEach((x) => {
                             var row = tbody.append("tr");
                             // adding div with table body
                             Object.entries(x).forEach(([key, value]) => {
                             var cell = row.append("td");
                             cell.text(value);
                             });
                         });
                    }
                }

                // entry for shape
                else if (shapeFilteredData.length !== 0){

                    // no entry for country
                    if (countryFilteredData.length === 0){
                        // dropping any entries in table
                        tbody.html("");

                        //setting variable for selections
                        var shapeStateDateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue && sighting.state === stateInputValue && sighting.shape === shapeInputValue);
                    
                        shapeStateDateCityFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
                            // adding div with table body
                            Object.entries(x).forEach(([key, value]) => {
                            var cell = row.append("td");
                            cell.text(value);
                            });
                        });

                    }
                    // the other option where country is inculded is already taken care of above
                    // so don't need an else if  here
                    // could probably actually combine the else if and if into one
               }

            }
            // entry for country, have city and date already included
            else if (countryFilteredData.length !== 0){
                // no entry for others, just date and city
                if (stateFilteredData.length === 0 && shapeFilteredData.length === 0){
                    // dropping any entries in table
                    tbody.html("");
                    
                    //setting variable for selections
                    var countryDateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue && sighting.country === countryInputValue);

                    countryDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        // adding div with table body
                        Object.entries(x).forEach(([key, value]) => {
                        var cell = row.append("td");
                        cell.text(value);
                        });
                    });
                }

                // state not included (already accounted for) and shape included
                else if (stateFilteredData.length === 0 && shapeFilteredData.length !== 0){
                    // dropping any entries in table
                    tbody.html("");

                    //setting variable for selections
                    var shapeCountryDateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue && sighting.country === countryInputValue && sighting.shape === shapeInputValue);

                    shapeCountryDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        // adding div with table body
                        Object.entries(x).forEach(([key, value]) => {
                        var cell = row.append("td");
                        cell.text(value);
                        });
                    });

                }
            }

            // entry for shape, have city and date already included
            else if (shapeFilteredData.length !== 0){
                // no entry for others expect date, city
                if (stateFilteredData.length === 0 && countryFilteredData.length === 0){
                    // dropping any entries in table
                    tbody.html("");

                    //setting variable for selections
                    var shapeDateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue && sighting.shape === shapeInputValue);

                    shapeDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        // adding div with table body
                        Object.entries(x).forEach(([key, value]) => {
                        var cell = row.append("td");
                        cell.text(value);
                        });
                    });
                }
            }
        }

        // entry for state, have date included
        else if (stateFilteredData.length !== 0){
            // no entry for others
            if (cityFilteredData.length === 0 && countryFilteredData.length === 0 && shapeFilteredData.length === 0){
               // dropping any entries in table
               tbody.html("");

               //setting variable for selections
               var stateDateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue &&  sighting.state === stateInputValue);
               
               stateDateFilteredData.forEach((x) => {
                var row = tbody.append("tr");
                // adding div with table body
                Object.entries(x).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
                });
            });    
            }

            // no entry for city (it has been included for these options already)
            if (cityFilteredData.length === 0){
                // entry for country
                if (countryFilteredData.length !== 0){
                    // no entry for shape
                    if (shapeFilteredData.length === 0){
                        // dropping any entries in table
                        tbody.html("")

                        //setting variable for selections
                        var countryStateDateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue &&  sighting.state === stateInputValue && sighting.country === countryInputValue);
                        
                        countryStateDateFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
                            // adding div with table body
                            Object.entries(x).forEach(([key, value]) => {
                            var cell = row.append("td");
                            cell.text(value);
                            });
                        });    
                    }

                    // entry for shape
                    else if (shapeFilteredData.length !== 0){
                         // dropping any entries in table
                         tbody.html("")

                         //setting variable for selections
                         var shapeCountryStateDateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue &&  sighting.state === stateInputValue && sighting.country === countryInputValue && sighting.shape === shapeInputValue);
                         
                         shapeCountryStateDateFilteredData.forEach((x) => {
                             var row = tbody.append("tr");
                             // adding div with table body
                             Object.entries(x).forEach(([key, value]) => {
                             var cell = row.append("td");
                             cell.text(value);
                             });
                         });
                    }
                }

                //entry for shape and no entry for country
                if (shapeFilteredData.length !== 0 && countryFilteredData.length === 0){
                    // dropping any entries in table
                    tbody.html("")

                    //setting variable for selections
                    var shapeStateDateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue &&  sighting.state === stateInputValue && sighting.shape === shapeInputValue);
                         
                    shapeStateDateFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        // adding div with table body
                        Object.entries(x).forEach(([key, value]) => {
                        var cell = row.append("td");
                        cell.text(value);
                        });
                    });
                }
            }
        }

        //entry for country, have date included
        else if (countryFilteredData.length !== 0){
            // no entry for others
            if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && shapeFilteredData.length === 0){
                // dropping any entries in table
                tbody.html("");
 
                //setting variable for selections
                var countryDateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue &&  sighting.country === countryInputValue);
                
                countryDateFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
                 // adding div with table body
                 Object.entries(x).forEach(([key, value]) => {
                 var cell = row.append("td");
                 cell.text(value);
                 });
             });    
            }

            //entry for shape but not city or state
            if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && shapeFilteredData.length !== 0){
                // dropping any entries in table
                tbody.html("");
 
                //setting variable for selections
                var shapeCountryDateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue &&  sighting.country === countryInputValue && sighting.shape === shapeInputValue);
                
                shapeCountryDateFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
                 // adding div with table body
                 Object.entries(x).forEach(([key, value]) => {
                 var cell = row.append("td");
                 cell.text(value);
                 });
             });    
            }
        }

        //entry for shape, have date included
        else if (shapeFilteredData.length !== 0){
            // no entry for others
            if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && countryFilteredData.length === 0){
                // dropping any entries in table
                tbody.html("");
 
                //setting variable for selections
                var shapeDateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue &&  sighting.shape === shapeInputValue);
                
                shapeDateFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
                 // adding div with table body
                 Object.entries(x).forEach(([key, value]) => {
                 var cell = row.append("td");
                 cell.text(value);
                 });
             });    
            }
        }
    }

    // no entry for date
    else if (dateFilteredData.length === 0){
        
    }
















    // dateFilteredData.forEach((x) => {
    //     var row = tbody.append("tr");
    //     // adding div with table body
    //     Object.entries(x).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });


    // cityFilteredData.forEach((x) => {
    //     var row = tbody.append("tr");
    //     // adding div with table body
    //     Object.entries(x).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
  
    // stateFilteredData.forEach((x) => {
    //     var row = tbody.append("tr");
    //     // adding div with table body
    //     Object.entries(x).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });

  
    // countryFilteredData.forEach((x) => {
    //     var row = tbody.append("tr");
    //     // adding div with table body
    //     Object.entries(x).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   });
   

  
    // shapeFilteredData.forEach((x) => {
    //     var row = tbody.append("tr");
    //     // adding div with table body
    //     Object.entries(x).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    //   }); 
      
  

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