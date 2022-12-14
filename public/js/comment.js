



const commentFormHandler = async (event) => {
    event.preventDefault()
    const comment = document.getElementById('commentInput').value.trim()


    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ 
                comment }),
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

const commentBtn = document.getElementById('commentBtn').addEventListener('click', commentFormHandler)