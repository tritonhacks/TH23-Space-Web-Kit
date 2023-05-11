var url = 'https://api.nasa.gov/planetary/apod?api_key='
var api_key = 'VEsueNI89h5Hokc21dI4KqqZFG9BuGHy8zASMdSq'


document.addEventListener("DOMContentLoaded", async function () {
    let dateFormButton = document.getElementById("date_form")
    let currDateFormButton = document.getElementById("curr_date_form")
    let queryArea = document.getElementById('entered_date');
    let spacePicture = document.getElementById('space_picture');
    let picTitle = document.getElementById('pic_title');
    let picDate = document.getElementById('pic_date');
    let picDesc = document.getElementById('pic_desc');
    let resultBox = document.getElementById('res_box');



    dateFormButton.addEventListener("click", async function (event) {
        event.preventDefault() // Prevent page redirection
        
        let date = queryArea.value
        if (date.length != 10) {
            alert("Incorrectly formatted date!")
            return;
        }

        let response = await fetch(
            url + api_key + "&date=" + date,
            { method: 'GET'}
        );

        // Can also use this instead of catch
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        resultBox.style.visibility="visible";
        
        var results = await response.json();

        spacePicture.src = results["url"]
        picTitle.innerHTML = results["title"]
        picDate.innerHTML = results["date"]
        picDesc.innerHTML = results["explanation"]

        
    })

    currDateFormButton.addEventListener("click", async function (event) {

        let response = await fetch(
            url + api_key,
            { method: 'GET'}
        );

        // Can also use this instead of catch
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        var results = await response.json();
        console.log(results)
    
        resultBox.style.visibility="visible";

        spacePicture.src = results["url"]
        picTitle.innerHTML = results["title"]
        picDate.innerHTML = results["date"]
        picDesc.innerHTML = results["explanation"]

        
    })

})

