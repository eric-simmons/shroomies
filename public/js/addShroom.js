const locationBtn = document.getElementById('location')
const latInput = document.getElementById('latInput')
const lonInput = document.getElementById('lonInput')
const latInputWrap = document.getElementById('latInputWrap')
const lonInputWrap = document.getElementById('lonInputWrap')
const shroomForm = document.getElementById('shroomForm')
const shroomBtn = document.getElementById('addShroomBtn')
const spinner = document.querySelector('.lds-dual-ring')


async function handleSubmit(event) {
    event.preventDefault()
    locationBtn.style.display = 'none'
    spinner.style.display = 'block'
    const permissionStatus = await navigator.permissions.query({
        name: "geolocation"
    })
    console.log(permissionStatus)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)
            locationBtn.style.display = 'block'
            spinner.style.display = 'none'
            latInputWrap.style.display = 'block'
            lonInputWrap.style.display = 'block'
            latInput.value = position.coords.latitude
            lonInput.value = position.coords.longitude

        });
    } else {
        console.log("Geolocation is not supported by this browser.")
    }
}
locationBtn.addEventListener('click', handleSubmit)
