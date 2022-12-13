const shroomForm = document.getElementById('shroomForm')
const shroomBtn = document.getElementById('addShroomBtn')

// const location = {
//     coords: {
//         latitude: 43.056236,
//         longitude: -87.8921468,
//     }
// }

async function handleSubmit(event) {
    event.preventDefault()
    const permissionStatus = await navigator.permissions.query({
        name: "geolocation"
    })
    console.log(permissionStatus)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)
        });
    } else {
        console.log("Geolocation is not supported by this browser.")
    }
}



// $('.addShroomBtn').click(function() {
//     console.log('hey')
//     $('.postModal').modal('show');
    
//  });

 shroomBtn.addEventListener('click' , function (){
    console.log('hey')
 })



shroomForm.addEventListener('submit', handleSubmit)