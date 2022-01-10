const fishwatchEndpoint = 'http://127.0.0.1:5000/search/'

// Use this to load in auto-complete results
document.addEventListener("DOMContentLoaded", async function () {
    //let results = await fetch(fishwatchEndpoint, { mode: 'no-cors' });
    let fish = 'Red-Snapper'
    let results = await fetch(fishwatchEndpoint + fish, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    let decoded = await results.json()
    console.log(decoded) // Leave for now, we need to c the fields.

    let description = decoded[0]["Physical Description"]
    let imageURL = decoded[0]["Image Gallery"][0].src

    console.log(imageURL)

    let resultsDisplay = document.getElementById('results');
    let imageDisplay = document.getElementById("result-image");
    imageDisplay.src = `${imageURL}`

    resultsDisplay.innerHTML += description;
})

function submit() {

    let query = document.querySelector('form[name="query"]').innerText;

    let content = document.getElementById('result-header');
    let image = document.getElementById('result-image');


}