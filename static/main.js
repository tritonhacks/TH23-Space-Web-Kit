const fishwatchEndpoint = 'http://127.0.0.1:5000/search/'

// Use this to load in auto-complete results
document.addEventListener("DOMContentLoaded", async function () {
    let searchButton = document.getElementById("submit")
    
    searchButton.addEventListener("click", async function(event) {
        event.preventDefault() // Prevent page redirection
        
        let fish = document.getElementById('query').value;
        let resultsDisplay = document.getElementById('result-text');
        let imageDisplay = document.getElementById("result-image");
        
        let results = await fetch(fishwatchEndpoint + fish, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (!results.ok) {
            resultsDisplay.innerHTML = `Error, ${fish} not found`
            return
        }

        // Fishing Rate, Habitat, Location, Population, Species Illustration Photo >src, Scientific Name
        let decoded = await results.json()
        console.log(decoded)
        let description = decoded[0]["Physical Description"]

        // get random image from image gallery
        let imageURL = decoded[0]["Image Gallery"][Math.floor(Math.random() * decoded[0]["Image Gallery"].length)].src
        
        imageDisplay.src = `${imageURL}`
        resultsDisplay.innerHTML = description;
    })
})

