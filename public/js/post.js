const postBtn = document.getElementById('post')
const imgInput = document.getElementById('imageInput')
const imgInputWrap = document.getElementById('imageInputWrap')

let imgUrl = ''

const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dwdxzlxen',
    uploadPreset: 'shroomies',
},
    (error, result) => {
        if (!error && result && result.event === "success") {
            imgUrl = result.info.url
            imgInput.value = imgUrl
            imgInputWrap.style.display = 'block'
        }
    }
)

const postFormHandler = async (event) => {
    event.preventDefault()
    const title = document.getElementById('titleInput').value.trim()
    const description = document.getElementById('descriptionInput').value.trim()
    const lat = document.getElementById('latInput').value || null
    const lon = document.getElementById('lonInput').value || null

    if (title && description) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ 
                title, 
                description, 
                lat, 
                lon,  
                image:imgUrl }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            document.location.replace('/posts')
        } else {
            alert(response.statusText)
        }
    }
    else{
        alert("Title and Description required for post")
    }
}



const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/posts');
        } else {
            alert('Failed to delete project');
        }
    }
};

document.getElementById("upload_widget").addEventListener("click", function (event) {
    event.preventDefault()
    myWidget.open();
}, false);

document
    .getElementById('shroomForm')
    .addEventListener('submit', postFormHandler);

document
    .getElementById('postList')
    .addEventListener('click', delButtonHandler);




















