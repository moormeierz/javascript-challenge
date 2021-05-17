// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function (ufoReport) {
    console.log(ufoReport);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
data.forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");


    // Step 3:  Use `Object.entries` to console.log each weather report value
    Object.entries(ufoReport).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Prevent the page from refreshing
button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime"); 

// Get the value property of the input element
var inputValue = inputElement.property("value");

// Print the value to the console
// console.log(inputValue);


// Filter the data
var filter_data = tableData.filter(tableData => tableData.datetime === inputValue);
filter_data.forEach(function(date_filtered){
    var row=tbody.append("tr");
    Object.entries(date_filtered).forEach(function([key,value]){
    var cell=tbody.append("td");
    cell.text(value);
        });
    });
});



