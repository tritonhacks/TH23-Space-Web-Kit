const endpoint = 'http://127.0.0.1:5000/results/'

var request = new XMLHttpRequest();
var url = 'https://api.nasa.gov/planetary/apod?api_key='
var api_key = 'VEsueNI89h5Hokc21dI4KqqZFG9BuGHy8zASMdSq'


// Use this to load in auto-complete results
document.addEventListener("DOMContentLoaded", async function () {
    let dateFormButton = document.getElementById("date_form")
    let currDateFormButton = document.getElementById("curr_date_form")
    let queryArea = document.getElementById('entered_date');
    let testResult = document.getElementById('test_result');

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
        event.preventDefault() // Prevent page redirection

        let response = await fetch(
            url + api_key,
            { method: 'GET'}
        );

        // Can also use this instead of catch
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        resultBox.style.visibility="visible";

        var results = await response.json();
        console.log(results)

        spacePicture.src = results["url"]
        picTitle.innerHTML = results["title"]
        picDate.innerHTML = results["date"]
        picDesc.innerHTML = results["explanation"]

        
    })

})


/**
 * 
 * https://www.sitepoint.com/xmlhttprequest-vs-the-fetch-api-whats-best-for-ajax-in-2019/#:~:text=The%20Fetch%20API%20is%20a,and%20async%2Fawait%20without%20callbacks.
 * https://dmitripavlutin.com/javascript-fetch-async-await/
 */