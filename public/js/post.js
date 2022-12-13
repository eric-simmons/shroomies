const postBtn = document.getElementById('post')

const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dwdxzlxen',
    uploadPreset: 'shroomies'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        console.log(result.info.url) 
    }
}
)
document.getElementById("upload_widget").addEventListener("click", function (event) {
    event.preventDefault()
    myWidget.open();
}, false);



const postFormHandler = async (e) => {
    e.preventDefault()
    const image = result.info.url
    const title = document.getElementById('titleInput').value.trim()
    const description = document.getElementById('descriptionInput').value.trim()
    const location = document.getElementById('locationInput').value.trim()

    if (title && description && location && image) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, description, location, image }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/post');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .getElementById('shroomForm')
    .addEventListener('submit', postFormHandler);

document
    .getElementById('postList')
    .addEventListener('click', delButtonHandler);




















