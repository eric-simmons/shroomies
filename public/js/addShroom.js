const shroomForm = document.getElementById('shroomForm')




function handleSubmit(event) {
    event.preventDefault()
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)
        });
    } else {
        console.log("Geolocation is not supported by this browser.")
    }
}




shroomForm.addEventListener('submit', handleSubmit)