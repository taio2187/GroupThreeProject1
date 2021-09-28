fetch('https://api.covid19api.com/countries')
.then(function(response) {
    return response.json();
})
.then(function(response) {
    console.log(response);
});

fetch('https://api.covid19api.com/country/south-africa/status/confirmed?from=2021-03-11T00:00:00Z&to=2021-04-03T00:00:00Z'
)
.then(function(response2) {
    return response2.json();
})
.then(function(response2) {
    console.log(response2);
});

function kanyeFetch() {
fetch('https://api.kanye.rest')
.then(function(response3) {
    return response3.json();
})
.then(function(response3) {
    console.log(response3);
    let kanyeQuote = document.querySelector('#kanye-container');
    kanyeQuote.innerHTML = '<p>'+response3.quote+'</p>';
});
}