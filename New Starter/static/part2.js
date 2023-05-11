document.addEventListener("DOMContentLoaded", async function () {
    let button = document.getElementById('submit');

    // Solution
    var image = document.getElementById('space-img');
    let results = await fetch('http://127.0.0.1:5000/sample_image',{
        methods: 'GET'
    });
    decoded = await results.json()
    button.addEventListener("click", async function(event){
        image.src = decoded
        image.style.height = "auto"
        image.style.width = "800px"
    })
})

