



const commentFormHandler = async (event) => {
    event.preventDefault()
    console.log(event.target.dataset.id)
   console.log(event.target.querySelector('.commentInput').value)


    // const comment = document.getElementById('commentInput').value.trim()


    // if (comment) {
    //     const response = await fetch('/api/comment', {
    //         method: 'POST',
    //         body: JSON.stringify({ 
    //             comment }),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     if (response.ok) {
    //         document.location.replace('/')
    //     } else {
    //         alert(response.statusText)
    //     }
    // }
}
//array constructor 
const commentForms = Array.from(document.querySelectorAll('.commentForm'))
commentForms.forEach(form =>{
    form.addEventListener('submit', commentFormHandler)
})

// .addEventListener('click', commentFormHandler)