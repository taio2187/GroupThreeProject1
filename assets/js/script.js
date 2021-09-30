function dataFetch() {
fetch('https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2021-03-01/2021-04-01'
)
.then(function(response2) {
    return response2.json();
})
.then(function(response2) {
    console.log(response2);
    let covidData = document.querySelector('#covid-container');
    let country = document.querySelector('#countries-options');
    let countryCode = country.value;
    let date = '2021-04-01'
    covidData.innerHTML = '<p>'+response2.data.date.countryCode+'</p>';
});
}

function kanyeFetch() {
fetch('https://api.kanye.rest/')
.then(function(response3) {
    return response3.json();
})
.then(function(response3) {
    console.log(response3);
    let kanyeQuote = document.querySelector('#kanye-container');
    kanyeQuote.innerHTML = '<p>\"'+response3.quote+'\" -Kanye West</p>';
});
}