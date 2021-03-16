// from data.js
var tableData = data;

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
    var dateInputValue = dateInputElement.property("value").trim();
    // finding the filtered data for the specific entered date
    // using sighting as a pararmeter for this proccess. it references all the data from tableData
    var dateFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue);

// CITY 
    // Selecting the input element
    var cityInputElement = d3.select("#city")
    // obtaining the value of inputElement variable
    var cityInputValue = cityInputElement.property("value").toLowerCase().trim();
    // finding the filtered data for the specific entered city
    var cityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue);
    
// STATE 
    // Selecting the input element
    var stateInputElement = d3.select("#state")
    // obtaining the value of inputElement variable
    var stateInputValue = stateInputElement.property("value").toLowerCase().trim();
    // finding the filtered data for the specific entered city
    var stateFilteredData = tableData.filter(sighting => sighting.state === stateInputValue);

// COUNTRY 
    // Selecting the input element
    var countryInputElement = d3.select("#country")
    // obtaining the value of inputElement variable
    var countryInputValue = countryInputElement.property("value").toLowerCase().trim();
    // finding the filtered data for the specific entered city
    var countryFilteredData = tableData.filter(sighting => sighting.country === countryInputValue);

// SHAPE 
    // Selecting the input element
    var shapeInputElement = d3.select("#shape")
    // obtaining the value of inputElement variable
    var shapeInputValue = shapeInputElement.property("value").toLowerCase().trim();  
    // finding the filtered data for the specific entered city
    var shapeFilteredData = tableData.filter(sighting => sighting.shape === shapeInputValue);
       
// CREATING THE TABLE

    // Getting a reference to the table body in index.html
    var tbody = d3.select("tbody");

    // Clearing the table rows and values from tbody tag in html code before the filtered data is added to the table
    tbody.html("");

    //entry for date
    if (dateFilteredData.length !== 0) {
        // no entry for others
        if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && countryFilteredData.length === 0 && shapeFilteredData.length === 0){
            // dropping any entries in table
            tbody.html("");
            
            // creating rows and adding the data
            dateFilteredData.forEach((x) => {
                var row = tbody.append("tr");
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
                // dropping any entries in table
                tbody.html("");
                
                var dateCityFilteredData = tableData.filter(sighting => sighting.datetime === dateInputValue && sighting.city === cityInputValue);
                
                // creating rows and adding the data
                dateCityFilteredData.forEach((x) => {
                    var row = tbody.append("tr");
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
                    
                    // creating rows and adding the data
                    stateDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
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
                        // creating rows and adding the data
                        countryStateDateCityFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
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
                         // creating rows and adding the data
                         shapeCountryStateDateCityFilteredData.forEach((x) => {
                             var row = tbody.append("tr");
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
                        
                        // creating rows and adding the data
                        shapeStateDateCityFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
                            Object.entries(x).forEach(([key, value]) => {
                            var cell = row.append("td");
                            cell.text(value);
                            });
                        });

                    }
                    // the other option where country is inculded is already taken care of above
                    // so don't need an else if here
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

                    // creating rows and adding the data
                    countryDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
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

                    // creating rows and adding the data
                    shapeCountryDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
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

                    // creating rows and adding the data
                    shapeDateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
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
               
               // creating rows and adding the data
               stateDateFilteredData.forEach((x) => {
                var row = tbody.append("tr");
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
                        
                        // creating rows and adding the data
                        countryStateDateFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
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
                         
                         // creating rows and adding the data
                         shapeCountryStateDateFilteredData.forEach((x) => {
                             var row = tbody.append("tr");
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
                    
                    // creating rows and adding the data
                    shapeStateDateFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
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
                
                // creating rows and adding the data
                countryDateFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
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
                
                // creating rows and adding the data
                shapeCountryDateFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
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
                
                // creating rows and adding the data
                shapeDateFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
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
         // no entry for others
         if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && countryFilteredData.length === 0 && shapeFilteredData.length === 0){
            tbody.html("");
            
            //appending a row
            var row = tbody.append("tr");
            // adding a data tag
            var cell = row.append("td");
            // printing message
            cell.text("No sightings match your search criteria");   
        }
        // entry for city
        else if (cityFilteredData.length !== 0){
            // no entry for others, just city
            if (stateFilteredData.length === 0 && countryFilteredData.length === 0 && shapeFilteredData.length === 0){
                tbody.html("");
                
                var CityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue);

                // creating rows and adding the data
                CityFilteredData.forEach((x) => {
                    var row = tbody.append("tr");
                    Object.entries(x).forEach(([key, value]) => {
                      var cell = row.append("td");
                      cell.text(value);
                    });
                  });
            }

            // entry for state
            else if (stateFilteredData.length !== 0){

                // no entry for others, info for city, state
                if (countryFilteredData.length === 0 && shapeFilteredData.length === 0) {
                    tbody.html("");

                    var stateCityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue && sighting.state === stateInputValue);
                    
                    // creating rows and adding the data
                    stateCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
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
                        var countryStateCityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue && sighting.state === stateInputValue && sighting.country === countryInputValue);
                        
                        // creating rows and adding the data
                        countryStateCityFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
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
                         var shapeCountryStateCityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue && sighting.state === stateInputValue && sighting.country === countryInputValue && sighting.shape === shapeInputValue);
                         
                         // creating rows and adding the data
                         shapeCountryStateCityFilteredData.forEach((x) => {
                             var row = tbody.append("tr");
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
                        var shapeStateCityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue && sighting.state === stateInputValue && sighting.shape === shapeInputValue);
                    
                        // creating rows and adding the data
                        shapeStateCityFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
                            Object.entries(x).forEach(([key, value]) => {
                            var cell = row.append("td");
                            cell.text(value);
                            });
                        });

                    }
                    // the other option where country is inculded is already taken care of above
               }

            }
            // entry for country, have city already included
            else if (countryFilteredData.length !== 0){
                // no entry for others, just city
                if (stateFilteredData.length === 0 && shapeFilteredData.length === 0){
                    // dropping any entries in table
                    tbody.html("");
                    
                    //setting variable for selections
                    var countryCityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue && sighting.country === countryInputValue);

                    // creating rows and adding the data
                    countryCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
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
                    var shapeCountryCityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue && sighting.country === countryInputValue && sighting.shape === shapeInputValue);

                    // creating rows and adding the data
                    shapeCountryCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        Object.entries(x).forEach(([key, value]) => {
                        var cell = row.append("td");
                        cell.text(value);
                        });
                    });

                }
            }

            // entry for shape, have city already included
            else if (shapeFilteredData.length !== 0){
                // no entry for others except city
                if (stateFilteredData.length === 0 && countryFilteredData.length === 0){
                    // dropping any entries in table
                    tbody.html("");

                    //setting variable for selections
                    var shapeCityFilteredData = tableData.filter(sighting => sighting.city === cityInputValue && sighting.shape === shapeInputValue);

                    // creating rows and adding the data
                    shapeCityFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        Object.entries(x).forEach(([key, value]) => {
                        var cell = row.append("td");
                        cell.text(value);
                        });
                    });
                }
            }
        }

        // entry for state, have date not included
        else if (stateFilteredData.length !== 0){
            // no entry for others
            if (cityFilteredData.length === 0 && countryFilteredData.length === 0 && shapeFilteredData.length === 0){
               // dropping any entries in table
               tbody.html("");

               //setting variable for selections
               var stateFilteredData = tableData.filter(sighting => sighting.state === stateInputValue);
               
               // creating rows and adding the data
               stateFilteredData.forEach((x) => {
                var row = tbody.append("tr");
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
                        var countryStateFilteredData = tableData.filter(sighting => sighting.state === stateInputValue && sighting.country === countryInputValue);
                        
                        // creating rows and adding the data
                        countryStateFilteredData.forEach((x) => {
                            var row = tbody.append("tr");
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
                         var shapeCountryStateFilteredData = tableData.filter(sighting => sighting.state === stateInputValue && sighting.country === countryInputValue && sighting.shape === shapeInputValue);
                         
                         // creating rows and adding the data
                         shapeCountryStateFilteredData.forEach((x) => {
                             var row = tbody.append("tr");
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
                    var shapeStateFilteredData = tableData.filter(sighting => sighting.state === stateInputValue && sighting.shape === shapeInputValue);
                    
                    // creating rows and adding the data
                    shapeStateFilteredData.forEach((x) => {
                        var row = tbody.append("tr");
                        Object.entries(x).forEach(([key, value]) => {
                        var cell = row.append("td");
                        cell.text(value);
                        });
                    });
                }
            }
        }

        //entry for country, have date not included
        else if (countryFilteredData.length !== 0){
            // no entry for others
            if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && shapeFilteredData.length === 0){
                // dropping any entries in table
                tbody.html("");
 
                //setting variable for selections
                var countryFilteredData = tableData.filter(sighting => sighting.country === countryInputValue);
                
                // creating rows and adding the data
                countryFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
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
                var shapeCountryFilteredData = tableData.filter(sighting => sighting.country === countryInputValue && sighting.shape === shapeInputValue);
                
                // creating rows and adding the data
                shapeCountryFilteredData.forEach((x) => {
                 var row = tbody.append("tr");
                 Object.entries(x).forEach(([key, value]) => {
                 var cell = row.append("td");
                 cell.text(value);
                 });
             });    
            }
        }

        //entry for shape, have date not included
        else if (shapeFilteredData.length !== 0){
            // no entry for others
            if (cityFilteredData.length === 0 && stateFilteredData.length === 0 && countryFilteredData.length === 0){
                // dropping any entries in table
                tbody.html("");
 
                //setting variable for selections
                var shapeFilteredData = tableData.filter(sighting => sighting.shape === shapeInputValue);
                
                // creating rows and adding the data
                shapeFilteredData.forEach((x) => {
                 var row = tbody.append("tr");

                 Object.entries(x).forEach(([key, value]) => {
                 var cell = row.append("td");
                 cell.text(value);
                 });
             });    
            }
        }
    }
}

