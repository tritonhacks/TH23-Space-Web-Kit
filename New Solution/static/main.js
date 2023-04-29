document.addEventListener("DOMContentLoaded", async function(){
    var welcome = document.getElementById("welcome_header")
    var dateForm = document.getElementById("date_form")
    var nameForm = document.getElementById("name_form")
    var queryArea = document.getElementById("query_area")
    var formArea= document.getElementById("form_area")

    name_form.addEventListener("click", async function (event) {
        event.preventDefault() // Prevent page redirection
        var name = queryArea.value
        welcome.innerHTML="<h1>Hello, "+name+"! Let's enter the explore page.<h1>"
        dateForm.style.visibility="visible"
        formArea.style.visibility="hidden";
    })
})
