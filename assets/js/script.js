function dataFetch() {
    fetch('https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2021-03-01/2021-04-01'
    )
    .then(function(response2) {
        return response2.json();
    })
    .then(function(response2) {
        console.log(response2);
        let instructionsEl = document.getElementById("instructions");
        instructionsEl.classList.add("is-hidden");

        let covidData = document.querySelector('#covid-container');
        let country = document.querySelector('#countries-options');
        let countryName = document.getElementById("countryN");
        let updateEl = document.getElementById("upDate");
        let countryCodeEl = document.getElementById("countryCode");
        let confirmedEl = document.getElementById("confirmedCases");
        let deathsEl = document.getElementById("deaths");
        let stringencyEl = document.getElementById("stringency");
        let stringencyLgacyEl = document.getElementById("stringencyLegacy");

        let selectedCountry = country.options[country.selectedIndex].text;
        countryName.innerHTML = selectedCountry;
        
        
        let date = '2021-04-01';
        updateEl.innerHTML = date;
    
        let selectedCountryCode = country.options[country.selectedIndex].value;
        countryCodeEl.innerHTML = selectedCountryCode;

        if (selectedCountryCode === response2.data['2021-04-01'].object) {
            let info = response2.data['2021-04-01'].selectedCountryCode.confirmed;
            console.log(info);
        }
    
        //covidData.innerHTML = '<p class=\"subtitle is-5\"> <strong>Confirmed Cases:</strong> ' + confirmedCases +'</p>';
    
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

$(function () {
    $('#countries-options').change(function () {
        localStorage.setItem('todoData', this.value);
    });
    if (localStorage.getItem('todoData')) {

        $('#countries-options').val(localStorage.getItem('todoData')).trigger('change');
    }
});