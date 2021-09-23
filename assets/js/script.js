fetch('https://api.covid19api.com/countries')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response);
});
fetch('https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z'
)
.then(function(response2) {
    return response2.json();
})
.then(function(response2) {
    console.log(response2);
});