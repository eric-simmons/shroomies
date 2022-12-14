const postBtn = document.getElementById('post')
const imgInput = document.getElementById('imageInput')
const imgInputWrap = document.getElementById('imageInputWrap')

let imgUrl = ''

const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dwdxzlxen',
    uploadPreset: 'shroomies',
    styles:{
        palette: {
          window: "#FFF",
          windowBorder: "#90A0B3",
          tabIcon: "#0E2F5A",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link:  "#0078FF",
          action:  "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        },
        frame: {
          background: "#0E2F5B99"
        },
        fonts: {
            "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
        }
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
    const lat = document.getElementById('latInput').value
    const lon = document.getElementById('lonInput').value

    if (title && description && lat && lon) {
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




















